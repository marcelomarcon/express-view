const express = require("express");
const router = express.Router();
const path = require("path");
const User = require("../models/User");

router.get("/", (req, res) => {
  res.render(path.join(__dirname, "../", "views", "login.ejs"), {});
});

router.post("/", async (req, res, next) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).send("Invalid username or password");
    }

    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
      return res.status(400).send("Invalid username or password");
    }

    req.session.userId = user._id;
    res.send("Authenticated!");
  } catch (err) {
    next(err);
  }
});

module.exports = router;
