import "dotenv/config"

const config = {
  MONGODB_URI: process.env.MONGODB_URI,
  REFRESH_SECRET_TOKEN: process.env.REFRESH_SECRET_TOKEN,
  ACCESS_SECRET_TOKEN: process.env.ACCESS_SECRET_TOKEN
}

export default config