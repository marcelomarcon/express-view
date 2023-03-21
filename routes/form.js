const express = require("express");
const router = express.Router();
const path = require("path");
const User = require("../models/User");

router.get("/login", (req, res) => {
  res.render(path.join(__dirname, "../", "views", "form.ejs"), {});
});

router.post("/login", async (req, res, next) => {
  const { lusername, lpassword } = req.body;

  try {
    const user = await User.findOne({ username: lusername });
    console.log(user); // Add this line to check the user object returned from the database

    if (!user) {
      return res.status(400).send("Invalid username or password");
    }

    const isMatch = await user.comparePassword(lpassword);

    if (!isMatch) {
      res.redirect("/login");
    }

    req.session.userId = user._id;
    res.redirect("/home");
  } catch (err) {
    next(err);
  }
});

router.get("/register", (req, res) => {
  res.render(path.join(__dirname, "../", "views", "form.ejs"), {});
});

router.post("/register", async (req, res, next) => {
  const { username, email, password, confirm_password } = req.body;

  // Check if the passwords match
  if (password !== confirm_password) {
    return res.status(400).send("Passwords do not match");
  }

  try {
    const user = new User({ username, email, password });
    await user.save();
    res.redirect("/login");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error registering new user");
  }
});

module.exports = router;
