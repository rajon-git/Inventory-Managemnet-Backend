/**
 * Date: 11/07/2023
 * Subject: Inventory Project otp model
 * Auth: Rajon
 */

let mongoose = require("mongoose");
let otpSchema = new mongoose.Schema(
  {
    UserEmail: { type: String },
    otp: { type: String },
    status: { type: Number, default: 0 },
    createdDate: { type: Date, default: Date.now() },
  },
  { versionKey: false }
);

let OtpModel = mongoose.model("otps", otpSchema);
module.exports = OtpModel;