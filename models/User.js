const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      lowercase: true,
      unique: true,
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      select: false
    },
    email: {
      type: String,
      unique: true,
      require: true,
      lowercase: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Hamburger", UserSchema);
