import { Router } from "express";
import { cartValidator } from "../validator/cart.validator.js";
import authenticate from "../middleware/authenticate.js";

const router = Router();

router.post("/", authenticate, cartValidator, )


export default router;
