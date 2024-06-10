const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = mongoose.Schema({
  user_name: {
    type: String,
    required: [true, "User name is reuired"],
    unique: [true, "This user id exits"],
    lowercase: [true, "user name must be in lower case"],
    trim: true,
  },
  //custom email id
  email: {
    type: String,
    required: [true, "Email is reuired"],
    validate: {
      validator: function (val) {
        let condition = val === "test@gmail.com" ? false : true;
        return condition;
      },
      message: (props) => `${props.value} is not valid`,
    },
  },

  // using by library
  reference_email: {
    type: String,
    required: [true, "reference_email is reuired"],
    unique: true,
    validate(value) {
      if (validator.email(value)) {
        throw new Error("Email is invalid");
      }
    },
  },

  first_name: {
    type: String,
    required: [true, "First name is required"],
  },

  last_name: {
    type: String,
    require: [true, "Last name is required"],
  },

  mobile: {
    type: String,
    unique: true,
    length: 10,
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
