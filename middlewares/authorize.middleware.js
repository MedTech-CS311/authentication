// Import your needed packages

// Import the list of users

// This is your middleware (just a function)
const authorize = (req, res, next) => {

    // Get the Bearer Token from the request headers

    // Use jwt to compare the Bearer Token
    // Throw a 403 error if the token does not match

    // Call next if user is authorized
    // This will call the next function (the request handler)
    next()
}

module.exports = authorize