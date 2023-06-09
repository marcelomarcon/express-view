const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const session = require("express-session");

const mongoose = require("./database/config");
const handleNotFound = require("./middlewares/NotFoundMiddleware");
const loginRequired = require("./middlewares/authMiddleware");

const app = express();

// Routers imports
const homeRouter = require("./routes/home");
const formRouter = require("./routes/form");

// Env variables
dotenv.config();

// Views engines and static files with SASS
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(
  session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: true,
  })
);

// Public Routes
app.use("/", formRouter);

// Private Routes
app.use(loginRequired);
app.use("/home", homeRouter);

// Errors Routes
app.use(handleNotFound);

// Running the server
app.listen(process.env.PORT, () => {
  console.log("Running on port 3000");
});
