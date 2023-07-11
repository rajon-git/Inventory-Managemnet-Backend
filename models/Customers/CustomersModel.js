/**
 * Date: 11/07/2023
 * Subject: Inventory Project user model
 * Auth: Rajon
 */

const mongoose = require("mongoose");
const customersSchema = new mongoose.Schema(
  {
    UserEmail: { type: String },
    CustomerName: { type: String },
    Phone: { type: String, unique: true },
    Email: { type: String },
    Address: { type: String },
    CreatedDate: { type: Date, default: Date.now() },
  },
  { versionKey: false }
);
const CustomersModel = mongoose.model("customers", customersSchema);
module.exports = CustomersModel;