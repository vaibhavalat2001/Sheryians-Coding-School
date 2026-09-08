import postModel from "../models/post.model.js";
import { sendFiles } from "../services/storage.service.js";

export const createPost = async (req, res) => {
  try {
    const { caption } = req.body;
    const file = req.file;
    if (!caption || !file) {
      return res.status(400).json({
        success: false,
        message: "field are required",
      });
    }


    const uploadedImg = await sendFiles(file.buffer, file.originalname);
   
    const storedImg = await postModel.create({caption, image: uploadedImg.url})

    return res.status(200).json({
      message: "image uploaded successfully",
      post: storedImg
    });

  } catch (error) {
    return res.status(400).json({
      message: "invalid server error",
    });
  }
};
