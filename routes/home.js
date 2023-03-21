const express = require("express");
const router = express.Router();
const path = require("path");

const loginRequired = require("../middlewares/authMiddleware");

router.get("/", (req, res) => {
  res.render(path.join(__dirname, "../", "views", "home.ejs"), {
    message: "Rélou Uordi!",
  });
});

module.exports = router;
