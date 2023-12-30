import Post from "../models/post.model.js";
import {errorHandler} from "../utils/error.js";
import mongoose  from "mongoose";

export const createPost = async (req, res, next) => {
  const { userId, text, images } = req.body;
  const newPost = await Post.create({
    userId: userId,
    text: text,
    images: images,
  });
  res.status(200).json(newPost);
};

export const getPostbyUser = async (req, res, next) => {
    try{
        const postId = req.params.id;

    const posts = await Post.find();

    const post = posts.filter((post) => post.userId == postId);
        res.status(201).json(post);
    }
    catch(error){
        next(error);
    }
};
