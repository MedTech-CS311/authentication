// Import your packages here
const express = require('express');
const router = express.Router();

const { login, signup } = require("../controllers/auth.controller")

router.post("/signup", signup)
router.post("/login", login)

// Export your router here
module.exports = router;