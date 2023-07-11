
/**
 * Date: 11/07/2023
 * Subject: Inventory sales purchases model
 * Auth: Rajon
 */

const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const returnProductsSchema = new mongoose.Schema(
  {
    UserEmail: { type: String },
    ReturnID: { type: ObjectId },
    ProductID: { type: ObjectId },
    Qty: { type: Number },
    UnitCost: { type: Number },
    Total: { type: Number },
    CreatedDate: { type: Date, default: Date.now() },
  },
  { versionKey: false }
);

const ReturnProductsModel = mongoose.model("returnproducts",returnProductsSchema);

module.exports = ReturnProductsModel;