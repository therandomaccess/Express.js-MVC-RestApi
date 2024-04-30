import express from "express";
import * as post from "../controllers/post.js";
import auther from "../middleware/auth.js";

const router = express.Router();

router.get("/getPosts", post.getPosts);
router.post("/createPost", auther.auth, post.createPost);
router.get("/getDetail/:id", post.getDetail);
router.patch("/getUpdate/:id", auther.auth, post.getUpdate);
router.delete("/deletePost/:id", auther.auth, post.deletePost);
router.get("/searchPost", post.searchPosts);
export default router;
