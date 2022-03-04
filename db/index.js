const mongoose = require("mongoose");

module.exports = mongoose.connect(
  "mongodb://localhost:27017/let-me-inside",
  () => {
    console.log("Connected successfuly...");
  }
);
