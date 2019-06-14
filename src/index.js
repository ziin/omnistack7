require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

mongoose.connect(
  `mongodb+srv://${process.env.DB_MONGO_USER}:${
    process.env.DB_MONGO_PASSWORD
  }@cluster0-nsadm.mongodb.net/test?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true
  }
);

const app = express();

app.use(require("./routes"));

app.listen(3333);
