import express from "express";
import { createPost, getPost } from "../controllers/post.controller.js";

const router = express.Router();

router.post("/", createPost);
router.post("/:id", getPost);

export default router;
