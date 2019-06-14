const express = require("express");
const multer = require("multer");
// Configs
const uploadConfig = require("./config/imageUpload");
// Middlewares
const upload = multer(uploadConfig);
// Controllers
const PostController = require("./controllers/PostController");

const routes = express.Router();

// Posts
routes.get("/posts", PostController.list);
routes.post("/posts", upload.single("image"), PostController.create);

module.exports = routes;
