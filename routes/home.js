const express = require("express");
const router = express.Router();

router.get("/home", (req, res) => {
  res.render("home.ejs", { message: "Render from router" });
});


module.exports = router