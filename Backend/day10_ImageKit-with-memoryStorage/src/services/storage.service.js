import Imagekit, { toFile } from "@imagekit/nodejs";
import "dotenv/config";

const imagekit = new Imagekit({
  urlEndpoint: process.env.IK_URL,
  publicKey: process.env.IK_PUBLIC_KEY,
  privateKey: process.env.IK_PRIVATE_KEY,
});

export const sendFiles = async (fileBuffer, fileName) => {

  const file = await toFile(fileBuffer, fileName);

  const responce = await imagekit.files.upload({
    file,
    fileName,
    folder: "posts",
  });

  return responce;
};
