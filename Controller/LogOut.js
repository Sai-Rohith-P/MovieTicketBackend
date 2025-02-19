import LoginModel from "../Models/LoginModel.js"
import SignupModel from "../Models/SignupModel.js";
const LogOut = async (req, res) => {

    try {
        const { username } = req.body;
        const user = await SignupModel.findOne({ name: username });
        await LoginModel.deleteOne({ phone: user.phone });
        res.status(200).json({ message: "Logout Success. User removed from LoginModel." });
    } catch (error) {
        // console.error("Error in logout:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }

}
export default LogOut;