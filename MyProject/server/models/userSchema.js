const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    userName: {
      type: String,
      required: true,
        unique: true,
        
    },
  },

  email: {
    type: String,
    match:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
});

const User = mongoose.model("person", userSchema);
module.exports = User;
