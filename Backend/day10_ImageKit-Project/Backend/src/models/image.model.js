import mongoose from "mongoose"

const imageSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    }
}, {timestamps: true})

const imgModel = mongoose.model("image", imageSchema)

export default imgModel;