import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import config from "../app/config.js";
import userModel from "../models/user.model.js";

passport.use(
  new GoogleStrategy(
    {
      clientID: config.GOOGLE_CLIENT_ID,
      clientSecret: config.GOOGLE_CLIENT_SECRET,
      callbackURL: config.GOOGLE_CALLBACK_URL,
    },

    async (accessToken, refreshToken, profile, done) => {
      try {

        // let user = await userModel.findOne({ googleId: profile.id });
        // if (user) {
        //   return done(null, user);
        // }

        // user = await userModel.create({
        //   googleId: profile.id,
        //   name: profile.displayName,
        //   email: profile.emails[0].value,
        //   avatar: profile.photos?.[0]?.value,
        // });
        return done(null, profile);
      } catch (error) {
        return done(error);
      }
    },
  ),
);

export default passport;