const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
  },
  mobile: {
    type: String,
    unique: true,
    length: 10,
  },
  email: {
    type: String,
    default: null,
  },
  password: {
    type: String,
    unique: true,
    required: true,
  },
  userRole: {
    type: String,
    enum: ["super-admin", "admin", "member"],
    default: "member",
  },
  is_active: {
    type: Boolean,
    default: false,
    required: true,
  },
  is_verified: {
    type: Boolean,
    default: false,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", userSchema);
