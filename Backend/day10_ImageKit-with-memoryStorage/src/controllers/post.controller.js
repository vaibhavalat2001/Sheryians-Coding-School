import postModel from "../models/post.model.js";
import { sendFiles } from "../services/storage.service.js";

export const createPost = async (req, res) => {
  const { caption } = req.body;
  const file = req.file;
  if (!caption || !file) {
    return res.status(400).json({
      success: false,
      message: "field are required",
    });
  }

  console.log(file);

  const uploadImage = await sendFiles(file.buffer, file.originalname);
  console.log(uploadImage);

};
