// Import your packages here
var express = require('express');
var router = express.Router();

// Import the list of users from db


const signup = (req, res) => {
    
    // Get the new user data from request body

    // If the email is already in use, you should throw a 409 error 

    // Hash the password with bcrypt

    // Save the user to the users list

}

const login = (req, res) => {

    // Get the user data from request body

    // Throw a 404 if the user does not exist in the list of the users

    // Compare the password with bcrypt
    // Throw a 403 error if password is incorrect

    // Return an accessToken with jwt

}

module.exports = { signup, login }