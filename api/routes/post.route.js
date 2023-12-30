import express from "express";
import { createPost, getPostbyUser } from "../controllers/post.controller.js";

const router = express.Router();

router.post("/", createPost);
router.get("/:id", getPostbyUser);

export default router;
