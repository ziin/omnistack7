const Post = require("../models/Post");

module.exports = {
  async list(req, res) {
    const posts = await Post.find().sort("-createdAt");

    res.send(posts);
  },

  async create(req, res) {
    const { author, place, description, hashtags } = req.body;
    const { filename: image } = req.file;

    const post = await Post.create({
      author,
      place,
      description,
      hashtags,
      image
    });

    res.send(post);
  }
};
