const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("dev"))
app.use(express.static("public"));

mongoose.connect("mongodb+srv://Matt-Mongo:Mongo@DB21@cluster0.81ygy.mongodb.net/Workout?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
  
});

// routes
// app.use(require("./routes/api.js"));
app.use(require("./routes/views.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
