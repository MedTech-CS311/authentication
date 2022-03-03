// Import your needed packages
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

// Import the list of users

// This is your middleware (just a function)
const authorize = async (req, res, next) => {
  try {
    // Get the Bearer Token from the request headers
    let token = req.headers["authorization"];

    if (!token) {
      res.status(403).send();
    }

    if (token.startsWith("Bearer")) {
      token = token.slice(7, token.length);
    }

    // Use jwt to compare the Bearer Token
    const data = await jwt.verify(token, "secret");

    // Throw a 403 error if the token does not match
    const user = await User.findOne({ email: data });

    if (!user) {
      res.status(403).send();
    }

    // Call next if user is authorized
    // This will call the next function (the request handler)
    next();
  } catch (error) {
    res.status(500).send({ message: "An error occured" });
  }
};

module.exports = authorize;
