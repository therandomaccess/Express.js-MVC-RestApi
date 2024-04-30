import post from "../models/post.js";

const createPost = async (req, res) => {
  try {
    const newPost = await post.create(req.body);
    res.status(201).json({
      newPost,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getPosts = async (req, res) => {
  try {
    const Posts = await post.find();
    res.status(200).json({
      Posts,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getDetail = async (req, res) => {
  try {
    const Post = await post.findById(req.params.id);
    res.status(200).json({
      Post,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getUpdate = async (req, res) => {
  try {
    const updatedPost = await post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({
      updatedPost,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const deletePost = async (req, res) => {
  try {
    await post.findByIdAndDelete(req.params.id);
    res.status(201).json({
      message: "Delete successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const searchPosts = async (req, res) => {
  const { search, tag } = req.query;
  try {
    const title = new RegExp(search, "i");
    const posts = await post.find({
      $or: [{ title }],
      tag: { $in: tag.split(" ,") },
    });

    res.status(200).json({ posts });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export { getDetail, deletePost, getUpdate, getPosts, createPost,searchPosts };
