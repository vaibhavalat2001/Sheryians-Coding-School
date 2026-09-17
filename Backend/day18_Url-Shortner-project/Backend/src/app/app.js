import express from "express";
import urlRouter from "../routers/url.router.js";
import urlModel from "../models/url.models.js";
import cors from "cors";

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "https://shortnerurl-frontend.vercel.app/",
    credentials: true,
  }),
);

app.use("/api/urls", urlRouter);

app.get("/", (req, res) => {
  res.send("server connected successfully");
});

/*
 *   @post https://localhost:3000/:shortCode
 */
app.get("/:code", async (req, res) => {
  const { code } = req.params;

  if (!code) {
    return res.status(404).json({
      error: "page not found",
    });
  }

  try {
    const url = await urlModel.findOneAndUpdate({ shortCode: code });
    if (!url) {
      return res.status(404).json({
        message: "url not found",
      });
    }

    res.redirect(302, url.originalUrl);
    await urlModel.findOneAndUpdate(
      { shortCode: code },
      { $inc: { clicks: 1 } },
    );
  } catch (error) {
    return res.status(400).json({
      message: "doesn't access page",
    });
  }
});

export default app;
