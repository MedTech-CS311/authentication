require("dotenv").config();
const mongoose = require("mongoose");

const connection = mongoose.connect(process.env.DB_URL, () => {
  console.log("Successfuly connected to the Database");
});

module.exports = connection;
