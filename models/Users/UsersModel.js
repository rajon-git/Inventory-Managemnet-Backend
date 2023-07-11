/**
 * Date: 11/07/2023
 * Subject: Inventory Project user model
 * Auth: Rajon
 */

let mongoose = require("mongoose");
let userSchema = new mongoose.Schema(
  {
    UserEmail: { type: String, unique: true },
    firstName: { type: String },
    lastName: { type: String },
    mobile: { type: String },
    password: { type: String },
    photo: { type: String },
    createdDate: { type: Date, default: Date.now() },
  },
  { versionKey: false }
);

let UserModel = mongoose.model("users", userSchema);
module.exports = UserModel;