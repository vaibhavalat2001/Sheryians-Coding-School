import imgModel from "../models/image.model.js";
import { uploadImage } from "../services/post.service.js";

export const createController = async (req, res) => {
  try {
    const files = req.files;

    if (!files) {
      return res.status(400).json({
        success: false,
        message: "image is missing",
      });
    }

    const uploadedImg = await uploadImage(files);

    let storedImg;
    for (const imgUrl of uploadedImg) {
      storedImg = await imgModel.create({ image: imgUrl.url });
    }

    return res.status(201).json({
      success: true,
      message: "image uploaded successfully",
    });
  } catch (error) {
    return res.status(400).json({
      message: "invalid server error",
    });
  }
};

// get all
export const getController = async (req, res) => {
  try {
    const allImg = await imgModel.find();

    return res.status(200).json({
      message: "all images",
      images: allImg,
    });
  } catch (error) {}
};
