import Post from "../models/post.model.js";

export const createPost = async(req,res,next) => {
    const {userId,text,images} = req.body;
    const newPost = await Post.create({
        userId:userId,
        text:text,
        images:images
    });
    res.status(200).json(newPost);
}

export const getPost = async(req,res,next) => {

}