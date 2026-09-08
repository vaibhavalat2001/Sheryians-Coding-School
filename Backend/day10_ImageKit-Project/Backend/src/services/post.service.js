import Imagekit, { toFile } from "@imagekit/nodejs";

const imagekitInstance = new Imagekit({
  urlEndpoint: process.env.IK_URL,
  publicKey: process.env.IK_PUBLIC_KEY,
  privateKey: process.env.IK_PRIVATE_KEY,
});

export const uploadImage = async (files) => {
  const uploadedFiles = [];

  for (const val of files) {
    const file = await toFile(val.buffer, val.originalname);
    const result = await imagekitInstance.files.upload({
      file,
      fileName: val.originalname,
      folder: "images",
    });

    uploadedFiles.push(result);
  }

  return uploadedFiles;
};
