const express = require("express");
const path = require("path");
const dotenv = require("dotenv");

const app = express();

// Routes imports
const homeRouter = require("./routes/home");

// Env variables
dotenv.config();

// Views engines and static files with SASS
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);

app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/home", homeRouter);

// Running the server
app.listen(3000, () => {
  console.log("Running on port 3000");
});
