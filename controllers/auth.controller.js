// Import your packages here
require("dotenv").config();
var express = require("express");
var router = express.Router();
const bcrypt = require("bcrypt");

// Import the User model
const User = require("../models/user.model");

const signup = async (req, res) => {
  try {
    // Get the new user data from request body
    const userData = req.body;
    // If the email is already in use, you should throw a 409 error
    const user = await User.findOne({ email: userData.email });
    if (user) {
      res.status(409).send({ message: "Email Already in use" });
    }

    // Hash the password with bcrypt
    userData.password = await bcrypt.hash(
      userData.password,
      Number(process.env.SALT)
    );

    // Save the user to the db
    await User.create(userData);

    res.status(201).send();
  } catch (error) {
    console.log(error);
    res.status(500).send({ error });
  }
};

const login = (req, res) => {
  // Get the user data from request body
  // Throw a 404 if the user does not exist in the list of the users
  // Compare the password with bcrypt
  // Throw a 403 error if password is incorrect
  // Return an accessToken with jwt
};

module.exports = { signup, login };
