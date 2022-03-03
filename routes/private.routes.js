// Import your packages here
var express = require("express");
var router = express.Router();
const authorize = require("../middlewares/authorize.middleware");

// Define a request handler for login
router.get("/", authorize, (req, res) => {
  res.send("This is some very private data. Congrats!");
});

// Export your router here
module.exports = router;
