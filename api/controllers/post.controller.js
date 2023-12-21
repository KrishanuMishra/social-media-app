import Post from "../models/post.model.js";

export const createPost = async (req, res, next) => {
  const { userId, text, images } = req.body;
  const newPost = await Post.create({
    userId: userId,
    text: text,
    images: images,
  });
  res.status(200).json(newPost);
};

export const getPost = async (req, res) => {
  try {
    const postId = req.params.id;

    const posts = await Post.find();

    const post = posts.filter((post) => post.userId == postId);

    if (!posts) {
      return res.status(404).json({ error: "Post not found" });
    }

    res.json(post);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
