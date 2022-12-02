const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  id: Number,
  name: String,
  email: String,
  contact: Number,
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
