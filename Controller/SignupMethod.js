import SignupModel from "../Models/SignupModel.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';


const Signup = async (req, res) => {
    const secretKey = process.env.JWT_SECRET;

    const { name, email, password, phone } = req.body;

    const salt = await bcrypt.genSalt(5);
    const hashedPassword = await bcrypt.hash(password, salt);

    const signupuser = await new SignupModel({
        name: name,
        // password: password,
        email: email,
        phone: phone,
        password: hashedPassword
    })
    await signupuser.save();
    const payload = { data: name };
    const token = jwt.sign(payload, secretKey);


    // console.log({ "status": "success", "data": signupuser, token: token });
    res.send({ "status": "success", "data": signupuser, token: token });
}



export { Signup };