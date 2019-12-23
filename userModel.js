const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    new: {
      type: String,
      trim: true
    },
    reps:{
      type: String,
      trim: true
    },
    previous: {
        type: String,
        trim: true
      },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
