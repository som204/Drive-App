const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
  username: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: [true, "User is Required"],
  },
  originalname: {
    type: String,
    required: [true, "Original Name is Required"],
  },
  uploadname: {
    type: String,
    required: [true, "Upload Name is Required"],
  },
});

const file = mongoose.model("file", fileSchema);

module.exports = file;
