// Import your packages here
var express = require('express');
var router = express.Router();

// Define a request handler for login
router.get("/", (req, res) => {
    res.send("This is some normal public data. Nothing special here :(")
})

// Export your router here
module.exports = router;