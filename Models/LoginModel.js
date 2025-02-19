import mongoose from "mongoose";

const LoginSchema = mongoose.Schema({
    phone: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const LoginModel = mongoose.model("LoginModel", LoginSchema);

export default LoginModel;