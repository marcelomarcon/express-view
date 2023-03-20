const mongoose = require("mongoose");

const uri = "mongodb://localhost:27017/view";
const db = mongoose.connect(uri, {
  useNewUrlParser: true,
});

module.exports = db;
