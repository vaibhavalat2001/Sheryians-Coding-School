import { Router } from "express";
import urlModel from "../models/url.models.js";
import generateCode from "../utils/generateCode.js";

const router = Router();

/*
 * @Post /api/url/create
 */

router.post("/", async (req, res) => {
  const { url } = req.body;

  if (!url) {
    return res.status(404).json({
      error: "Please enter a URL",
    });
  }
  if (
    url.startsWith("http://") == false &&
    url.startsWith("https://") == false
  ) {
    return res.status(400).json({
      error: "Please enter a valid URL starting with http:// or https://",
    });
  }

  if (url.length > 2048) {
    return res.status(400).json({
      error: "URL is too long",
    });
  }

  try {
    const code = generateCode();

    const newUrl = await urlModel.create({
      originalUrl: url,
      shortCode: code,
    });

    return res.status(201).json({
      success: true,
      message: "shortUrl generated successfully",
      data: {
        url: newUrl,
      },
    });
  } catch (error) {
    return res.status(400).json({
      message: "Please enter a valid URL starting with http:// or https://",
    });
  }
});

/*
 * @get  /api/url/getAll
 */
router.get("/", async (req, res) => {
  try {
    const urls = await urlModel.find();

    if (urls.length == 0) {
      return res.status(404).json({
        message: "empty urls",
      });
    }
    return res.status(200).json({
      message: "all urls fetched successfully",
      data: {
        urls,
      },
    });
  } catch (error) {
    return res.status(400).json({
      message: "error while fetching all url",
    });
  }
});

/*
 * @delete  /api/url/:id
 */
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(404).json({
      error: "404 not found",
    });
  }

  try {
    const deleted = await urlModel.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({
        error: "shortUrl not found",
      });
    }
    return res.status(200).json({
      message: "shortUrl deleted successfully",
      data: {
        deleted,
      },
    });
  } catch (error) {
    return res.status(400).json({
      message: "error while deleting shortUrl",
    });
  }
});

export default router;
