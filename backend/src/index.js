const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes");

const app = express();

mongoose.connect(
  "mongodb+srv://admin:omnistack10@cluster0-kh9hp.mongodb.net/week10?retryWrites=true&w=majority",
  {
    useNewUrlParser: true, // tirar erro de deprecationWarning
    useUnifiedTopology: true // tirar erro de deprecationWarning
  }
);
app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(3333);
