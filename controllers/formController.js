const express = require("express");
const path = require("path");
const User = require("../models/User");

const getLoginPage = (req, res, next) => {
  res.render(path.join(__dirname, "../", "views", "form.ejs"), {
    message: "",
  });
};

const postLoginPage = async (req, res, next) => {
  const { lusername, lpassword } = req.body;

  try {
    const user = await User.findOne({ username: lusername });
    if (!user) {
      return res
        .status(401)
        .render(path.join(__dirname, "../", "views", "form.ejs"), {
          message: "Invalid username or password!",
        });
    }

    const isMatch = await user.comparePassword(lpassword);
    if (!isMatch) {
      return res
        .status(401)
        .render(path.join(__dirname, "../", "views", "form.ejs"), {
          message: "Invalid username or password!",
        });
    }

    req.session.userId = user._id;
    res.redirect("/home");
  } catch (err) {
    next(err);
  }
};

const getRegisterPage = (req, res, next) => {
  res.render(path.join(__dirname, "../", "views", "form.ejs"), {});
};

const postRegisterPage = async (req, res, next) => {
  const { username, email, password, confirm_password } = req.body;

  // Check if the passwords match
  if (password !== confirm_password) {
    return res
      .status(400)
      .render(path.join(__dirname, "../", "views", "form.ejs"), {
        message: "Passwords don't match!",
      });
  }

  try {
    const user = new User({ username, email, password });
    await user.save();
    res.redirect("/login");
  } catch (err) {
    console.error(err);
    // res.status(500).send("Error registering new user");
    return res
      .status(500)
      .render(path.join(__dirname, "../", "views", "form.ejs"), {
        message: "Error registering new user!",
      });
  }
};

module.exports = {
  getLoginPage,
  postLoginPage,
  postRegisterPage,
  getRegisterPage,
};
