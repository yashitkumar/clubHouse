const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User" }, // points to user

    bio: { type: String },
    instagram: { type: String },
    facebook: { type: String },
    youtube: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Profile", profileSchema);
