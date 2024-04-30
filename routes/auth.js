import express from "express";
import * as auth from "../controllers/auth.js";

const router = express.Router();

router.post("/register", auth.register);
router.post("/login", auth.login);

export default router;
