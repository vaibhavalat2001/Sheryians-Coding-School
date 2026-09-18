import urlModel from "../models/url.model.js";
import { shortCode } from "../utils/shortUrl.js";

//  @post   /api/urls/
export const createShortUrl = async (req, res) => {
  const { url } = req.body;

  if (!url) {
    return res.status(404).json({
      message: "url not found",
    });
  }

  try {
    const code = shortCode();

    const shortUrl = await urlModel.create({
      originalUrl: url,
      shortCode: code,
    });

    return res.status(200).json({
      message: "short code created successfully",
      data: {
        url: shortUrl,
      },
    });
  } catch (error) {
    return res.status(400).json({
      message: "invalid server error",
    });
  }
};

// @get   /api/urls/
export const allUrls = async (req, res) => {
  try {
    const urls = await urlModel.find();

    return res.status(200).json({
      message: "all urls fetched successfully",
      urls,
    });
  } catch (error) {
    return res.status(400).json({
      message: "urls not fetched",
    });
  }
};

//  @delete   /api/urls/:id
export const deleteUrl = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  if (!id) {
    return res.status(400).json({
      message: "id is required",
    });
  }

  const url = await urlModel.findByIdAndDelete(id);

  try {
    return res.status(200).json({
      message: "url deleted successfully",
      deleted: {
        url,
      },
    });
  } catch (error) {
    return res.status(404).json({
      message: "id is not found",
    });
  }
};

// redirect @get /:shortCode
export const redirect = async (req, res) => {
  const { shortCode } = req.params;

  if (!shortCode) {
    return res.status(400).json({
      message: "shortCode is required",
    });
  }

  try {
    const url = await urlModel.findOne({ shortCode });

    if (!url) {
      return res.status(404).json({
        message: "url not found",
      });
    }

    res.redirect(302, url.originalUrl);

    await urlModel.findOneAndUpdate({ shortCode }, { $inc: { clicks: 1 } });
  } catch (error) {
    return res.status(400).json({
      message: "invalid server error",
    });
  }
};
