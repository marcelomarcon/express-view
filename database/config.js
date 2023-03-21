const mongoose = require("mongoose");

mongoose
  .connect("mongodb://root:admin@127.0.0.1:27017/view?authSource=admin", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    authMechanism: "SCRAM-SHA-256",
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB", err));
