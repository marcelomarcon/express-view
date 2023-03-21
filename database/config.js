const mongoose = require("mongoose");

mongoose
  .connect("mongodb://root:admin@127.0.0.1:27017/view?authSource=admin", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useUnifiedTopology: true,
    socketTimeoutMS: 30000, // increase timeout value to 30 seconds
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB", err));


  module.exports = mongoose;