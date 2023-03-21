const express = require("express");
const router = express.Router();

const formController = require("../controllers/formController");

router.get("/login", formController.getLoginPage);
router.post("/login", formController.postLoginPage);

router.get("/register", formController.getRegisterPage);
router.post("/register", formController.postRegisterPage);

module.exports = router;
