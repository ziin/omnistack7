const express = require("express");
const multer = require("multer");
// Configs
const uploadConfig = require("./config/imageUpload");
// Middlewares
const upload = multer(uploadConfig);
// Controllers
const PostController = require("./controllers/PostController");
const LikeController = require("./controllers/LikeController");

const routes = express.Router();

// Posts
routes.get("/posts", PostController.list);
routes.post("/posts", upload.single("image"), PostController.create);
// Posts/:id
routes.post("/posts/:id/like", LikeController.create);

module.exports = routes;
