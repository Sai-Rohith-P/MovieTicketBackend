import express from 'express'
import SignupRoute from './Routes/Signup.js';
import { DbConnectivity } from './Db.js';
import LoginRoute from './Routes/Login.js';
import Home from './Routes/Home.js';
import Movies from './Routes/Movies.js';
import theaters from './Routes/Theaters.js';
import cros from 'cors'
import 'dotenv/config'
import theaterdetails from './Routes/TheaterDetails.js';

import Stripe from 'stripe'
import Sendmail from './SendingEmail.js';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cros())

app.use(cros({ origin: '*' }))
DbConnectivity();




app.use('/', theaterdetails)
app.use('/', SignupRoute);
app.use('/', LoginRoute);
app.use('/', Movies);
app.use('/', theaters);
app.use('/', Home);

app.post('/movieone/sitting/checking-session', async (req, res) => {
    try {

        // console.log("Incoming Request Body:", req.body); // Add this line to debug
        const collectData = req.body;

        if (!collectData.products) {
            return res.status(400).json({ error: "Missing products in request body" });
        }

        const lineItems = [{
            price_data: {
                currency: "inr",
                product_data: {
                    name: collectData.products.moviename,
                    description: `Seats: ${collectData.products.seats}, Time: ${collectData.products.time}`
                },
                unit_amount: collectData.products.price * 100 // Convert ₹ to paisa
            },
            quantity: collectData.products.count
        }];

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: lineItems,
            mode: "payment",
            success_url: 'https://movieticketfrontend.onrender.com/success',
            cancel_url: 'https://movieticketfrontend.onrender.com/cancel',
        });

        // console.log("Created Stripe Session:", session); // Debug Stripe session response
        res.json({ id: session.id });


    } catch (error) {
        console.error("Error creating session:", error);
        res.status(500).json({ "error at payment": error.message });
    }

})


// Sending email 

app.post('/success', async (req, res) => {
    try {
        const { products, username } = req.body;
        if (!username || !products) {
            return res.status(400).json({ error: "Missing username or ticket data" });
        }


        Sendmail(products, username);
        res.json({ message: "Ticket data received & email sent!" });
    } catch (error) {
        console.error("Error processing success route:", error);
        res.status(500).json({ error: error.message });
    }
})



let port = process.env.PORT;
app.listen(port, () => {
    console.log("Server start");

})