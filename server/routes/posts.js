import express from "express";
import { getFeedPosts, getUserPosts, likePost } from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */ 
router.get("/", verifyToken, getFeedPosts);
router.get("/:userId/posts", verifyToken, getUserPosts);//particluar user posts 

/* UPDATE */
router.patch("/:id/like", verifyToken, likePost); //LIKING AND unliking

export default router;