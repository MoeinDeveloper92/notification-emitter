const mongoose = require("mongoose");
//Schema of the user in the DB
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter name"],
    },
    email: {
      type: String,
      required: [true, "Please enter email"],
    },
    password: {
      type: String,
      required: [true, "Please enter password"],
    },
  },
  {
    //adding timestamop field for each user
    timestamps: true,
  }
);

module.exports = mongoose.model("Users", userSchema);
