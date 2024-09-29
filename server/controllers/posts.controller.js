const User = require("../models/User");
const Post = require("../models/Post");

module.exports.getAllThePosts = async (req, res) => {
  try {
    const posts = await Post.findAll({ include: User });
    res.status(200).send(posts);
  } catch (error) {
    console.log("error in get posts controller", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
module.exports.createPost = async (req, res) => {
  try {
    const post = await Post.create(req.body);
    res.status(201).send(post);
  } catch (error) {
    console.log("error in post controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
module.exports.updatepost = async (req, res) => {
  try {
    const { id } = req.params;
    const isExistpost = await Post.findByPk(id);

    if (!isExistpost) {
      return res.status(404).json({ message: "post not found!" });
    }

    const newData = await isExistpost.update(req.body);
    res.status(200).send(newData);
  } catch (error) {
    console.log("error in create post controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
module.exports.deletepost = async (req, res) => {
  try {
    const { id } = req.params;
    const isExistpost = await Post.findByPk(id);

    if (!isExistpost) {
      return res.status(404).json({ message: "post not found!" });
    }

    await isExistpost.destroy();
    res.status(204).end();
  } catch (error) {
    console.log("error in delete post controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
