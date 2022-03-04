// Import your packages here
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

// Import the list of users from db

const signup = async (req, res) => {
  // Get the new user data from request body
  const userData = req.body;

  // If the email is already in use, you should throw a 409 error
  const user = await User.findOne({ email: userData.email });

  if (user) {
    res.status(422).send({ message: "Email already taken" });
  }

  // Hash the password with bcrypt
  userData.password = await bcrypt.hash(userData.password, 10);

  // Save the user to the users list
  await User.create(userData);

  res.status(201).send();
};

const login = async (req, res) => {
  // Get the user data from request body
  const userData = req.body;
  // Throw a 404 if the user does not exist in the list of the users
  const dbUser = await User.findOne({ email: userData.email });

  if (!dbUser) {
    res.status(404).send({ message: "No user found with that email" });
    return;
  }

  // Compare the password with bcrypt
  const isPasswordCorrect = await bcrypt.compare(
    userData.password,
    dbUser.password
  );

  // Throw a 403 error if password is incorrect
  if (!isPasswordCorrect) {
    res.status(403).send({ message: "Wrong password" });
  }

  // Return an accessToken with jwt
  const token = jwt.sign({ email: userData.email }, "secret");

  res.status(200).send({
    user: dbUser,
    token,
  });
};

module.exports = { signup, login };
