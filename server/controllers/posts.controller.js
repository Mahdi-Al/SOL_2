const User = require("../models/User");
const post = require("../models/Post");

module.exports.getAllThePosts = async (req, res) => {
  try {
    const posts = await post.findAll({ include: User });
    res.status(200).send(posts);
  } catch (error) {
    console.log("error in get posts controller", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
