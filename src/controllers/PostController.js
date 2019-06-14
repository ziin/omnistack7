const Post = require("../models/Post");
const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

module.exports = {
  async list(req, res) {
    const posts = await Post.find().sort("-createdAt");

    res.send(posts);
  },

  async create(req, res) {
    const { author, place, description, hashtags } = req.body;
    const { filename } = req.file;

    const image = filename.split(".")[0].concat(".jpg");

    await sharp(req.file.path)
      .resize(500)
      .jpeg({
        quality: 70
      })
      .toFile(path.resolve(req.file.destination, "resized", image));

    fs.unlinkSync(req.file.path);

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
