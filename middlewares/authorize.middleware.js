// Import your needed packages
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

// Import the list of users

// This is your middleware (just a function)
const authorize = async (req, res, next) => {
  // Get the Bearer Token from the request headers
  const authHeaders = req.headers["authorization"];
  let token;

  if (authHeaders.startsWith("Bearer ")) {
    token = authHeaders.slice(7, authHeaders.length);
  }

  let email;

  // Use jwt to compare the Bearer Token
  // Throw a 403 error if the token does not match
  try {
    email = jwt.verify(token, "secret").email;
  } catch (error) {
    console.log(error);
    res.status(403).send(error);
  }

  if (!email) {
    res.status(403).send();
  }

  const user = await User.findOne({ email });

  if (!user) {
    res.status(403).send();
  }

  // Call next if user is authorized
  // This will call the next function (the request handler)
  next();
};

module.exports = authorize;
