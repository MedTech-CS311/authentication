# Let Me In

In this exercise, you have a server-side application developed with `NodeJS` and `Express`. Your mission is to protect this API so only authenticated users will have access to it.
You will have to use `Postman` to test your endpoints.

## Walkthrough

The repository contains:

- `index.js` file. That's where your server starts.
- `routes/` for the routes of each module. That's where you should define your endpoints.
- `controllers/` for the request handlers. That's where you should define your module logic.
- `middlewares/` for the middlewares. That's where we are going to define our `authorization` middleware.
- `db/` will play the role of the database in this exercise. It contains a collection of students stored in an array.

All the files contain comments that will guide you through.

## Basic Requirements

- [ ] Run the server through
```
npm start
```
Your application will start on port **3000**
- [ ] Open **Postman** and try to interact with the API

- [ ] You should be able to send requests to
```
localhost:3000/api/public
localhost:3000/api/private
```
This is not exactly what we need, since we want to protect our private routes

- [ ] Implement **Signup** to save new users to the list in `/controllers/auth.controller`
    - It should be a `post` request to `/api/auth/signup`
    - The request body should conatain an `email` and a `password`
    - Use [https://www.npmjs.com/package/bcrypt](bcrypt) to hash the password
    - Save the user with the hashed password to the list of users

- [ ] Implement **Login** to give access to the registered users by giving them a Bearer token to access the private routes
    - Also in `/controllers/auth.controller`, it should be a `post` request to `/api/auth`
    - The request body should conatain an `email` and a `password`
    - Map through the list of users and check if the user exists
    - Use [https://www.npmjs.com/package/bcrypt](bcrypt) to compare the password with the hashed the password 
    - Create a new Bearer Token with [https://www.npmjs.com/package/jsonwebtoken](jwt) and return it to the user

- [ ] Implement **authorize** middleware to limit access for registered users
    - Go to `/middlewares/authorize.middleware`
    - Get the **Bearer Token** from the request headers
    - Check if the token is valid through [https://www.npmjs.com/package/jsonwebtoken](jwt)
    - In case the token is not valid, return a *403* error

## Advanced Mode

- [ ] Create a react app and Implement a login / signup form that sends the requests to your server
- [ ] Output error messages to the user (User not found, Incorrect password)
- [ ] Redirect the user to another page in case of successful login

## Nightmare Mode

- [ ] Connect to a **MongoDB** database
- [ ] Create a `User` model in `/models/user.js`
- [ ] Save the users to the database instead of the list