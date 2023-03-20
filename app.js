const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const bodyParser = require('body-parser');

const app = express();

// Routes imports
const homeRouter = require("./routes/home");
const loginRouter = require("./routes/login");

// Env variables
dotenv.config();

// Views engines and static files with SASS
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(express.urlencoded());

// Routes
app.use("/home", homeRouter);
app.use("/login", loginRouter);

// Running the server
app.listen(process.env.PORT, () => {
  console.log("Running on port 3000");
});
