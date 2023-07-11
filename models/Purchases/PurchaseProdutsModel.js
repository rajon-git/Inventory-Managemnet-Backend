/**
 * Date: 11/07/2023
 * Subject: Inventory Project purchases model
 * Auth: Rajon
 */

const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const purchaseProductsSchema = new mongoose.Schema(
  {
    UserEmail: { type: String },
    PurchaseID: { type: ObjectId },
    ProductID: { type: ObjectId },
    Qty: { type: Number },
    UnitCost: { type: Number },
    Total: { type: Number },
    CreatedDate: { type: Date, default: Date.now() },
  },
  { versionKey: false }
);

const PurchaseProductsModel = mongoose.model("purchaseproducts",purchaseProductsSchema
);

module.exports = PurchaseProductsModel;