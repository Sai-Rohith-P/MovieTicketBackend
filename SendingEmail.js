import nodemailer from 'nodemailer';
import SignupModel from './Models/SignupModel.js';


const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_ADMIN,
        pass: process.env.EMAIL_PASS
    }
});

const Sendmail = async (products, username) => {
    const user = await SignupModel.findOne({ "name": username });
    if (!user) {
        console.log("User not found for username:", username);
        return { error: "User not found" };
    }


    const mailOptions = {
        from: process.env.EMAIL_ADMIN,
        to: user.email,
        subject: " Your Movie Ticket Booking Confirmation.",
        // text: `Congratulations,\n
        // You Are SuccessFully Booked Movie Ticket,\n
        // Your booking for ${products.moviename} is confirmed!\n
        // Movie Name: ${products.moviename}\n
        // Movie : ${products.movieimg}\n
        // Theater : ${products.theatername}\n
        // Seats: ${products.seats}\n
        // Time: ${products.time}\n
        // Price: ${products.price}

        // Thanks For Booking....Welcome Again`
        html: `
        <h2>Congratulations!</h2>
        <p>You have successfully booked your movie ticket.</p>
        <p><strong>Movie Name:</strong> ${products.moviename}</p>
        <p><strong>Theater:</strong> ${products.theatername}</p>
        <p><strong>Seats:</strong> ${products.seats}</p>
        <p><strong>Time:</strong> ${products.time}</p>
        <p><strong>Price:</strong> ${products.price}</p>
        <p><strong>Movie Poster:</strong></p>
        <img src="${products.movieimg}" alt="Movie Poster" width="300" style="border-radius: 10px;"/>
        <p><b>Thanks for booking! Welcome again.</b></p>
    `
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log("Email Sent:", info.response);
        return { message: "Email sent successfully!" };
    } catch (error) {
        console.log("Error:", error);
    }
}

export default Sendmail;