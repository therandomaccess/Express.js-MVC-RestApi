import express from "express";
import * as post from "../controllers/post.js";

const router = express.Router();

router.get("/getPosts", post.getPosts);
router.post("/createPost", post.createPost);
router.get("/getDetail/:id", post.getDetail);
router.patch("/getUpdate/:id", post.getUpdate);
router.delete("/deletePost/:id", post.deletePost);
router.get("/searchPost", post.searchPosts);
export default router;
