import mongoose from "mongoose";

const SignupSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    }
})

const SignupModel = mongoose.model("SignupModel", SignupSchema);

export default SignupModel;