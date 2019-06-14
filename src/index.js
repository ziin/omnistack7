require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

mongoose.connect(
  `mongodb+srv://${process.env.DB_MONGO_USER}:${
    process.env.DB_MONGO_PASSWORD
  }@cluster0-nsadm.mongodb.net/test?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true
  }
);

const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);

app.use((req, res, next) => {
  req.io = io;
  next();
});

app.use(cors());
// Static access to images
app.use(
  "/files",
  express.static(path.resolve(__dirname, "..", "uploads", "resized"))
);

app.use(require("./routes"));

server.listen(3333);
