// Packages and Libraries
const express = require("express");
const app = express();
const connection = require("./db");

// Middlewares
const authorize = require("./middlewares/authorize.middleware");

// Routes
const authRoutes = require("./routes/auth.routes");
const publicRoutes = require("./routes/public.routes");
const privateRoutes = require("./routes/private.routes");

// Routing to different modules

// Public modules
app.use("/api/auth", authRoutes);
app.use("/api/public", publicRoutes);

// Private modules
// Notice how we call authorize so the request goes through it to check authorization
app.use("/api/private", authorize, privateRoutes);

// Starting to listen to requests
app.listen(3000, () => {
  console.log("Started to listen for requests on port 3000 ...");
});
