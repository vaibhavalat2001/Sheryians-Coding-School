import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 50
    },
    email: {
        type: String,
        required: true
    },
    hashpassword: {
        type: String,
        required: true
    }
})

const userModel = mongoose.model("users", userSchema);

export default userModel;