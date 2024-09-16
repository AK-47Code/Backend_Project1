    import { Router } from "express";
import { loginUser,logoutUser, registerUser } from "../controllers/user.controller.js";
import { User } from "../models/user.models.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJwt } from "../middlewares/auth.middleware.js";
import { refreshAccessToken } from "../controllers/user.controller.js";
const router = Router()

router.route("/register").post(
    upload.fields([
        { name: 'avatar', maxCount: 1 },
        { name: 'coverImage', maxCount: 1 }
    ]),
    registerUser
);
router.route("/login").post(loginUser)
//Secured Routes
router.route("/logout").post(verifyJwt, logoutUser)
router.route("/refreshaccesstoken").post(refreshAccessToken)    

export default router;