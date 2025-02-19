import LoginModel from "../Models/LoginModel.js";
import SignupModel from "../Models/SignupModel.js";
import bcrypt from 'bcrypt'


const LoginMethod = async (req, res) => {
    const { phone, password } = req.body;

    const isPhoneNo = await SignupModel.find({ phone: phone });
    if (!isPhoneNo[0]) {
        // console.log("Sorry, Your Phone Number is Not Signup,So Please Signup First.");
        res.send({ "status": "Phone no not Found", "data": "Sorry, Your Phone Number is Not Signup,So Please Signup First." })
    } else {
        const SignPassword = await isPhoneNo[0].password;
        const IsPassword = await bcrypt.compare(password, SignPassword);
        // console.log(IsPassword);
        if (!IsPassword) {
            // console.log("Password Is Not Match ,Please Check Again.");
            res.send({ "status": "password Error", "data": "Password Is Not Match ,Please Check Again." });
        } else {
            const loginuser = await new LoginModel({
                phone: phone,
                password: SignPassword
            })
            await loginuser.save();
            // console.log("Login SuccessFull.");
            // Access username from signin model to login model here

            // console.log(loginuser);

            const useridentity = await SignupModel.findOne({ "phone": loginuser.phone });
            // console.log(useridentity);
            res.send({ "status": "Success", "data": "Login SuccessFull.", "User": useridentity.name });
        }
    }
}

export default LoginMethod;