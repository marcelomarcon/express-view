const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const app = express();
dotenv.config();

const homeRouter = require("./routes/home");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.engine("html", require("ejs").renderFile);

// Routes
app.use("/home", homeRouter);

// Running the server
app.listen(3000, () => {
  console.log("Running on port 3000");
});
