/**
 * Date: 11/07/2023
 * Subject: Inventory Project purchases model
 * Auth: Rajon
 */

const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const purchasesSchema = new mongoose.Schema(
  {
    UserEmail: { type: String },
    SupplierID: { type: ObjectId },
    VatTax: { type: Number },
    Discount: { type: Number },
    OtherCost: { type: Number },
    ShippingCost: { type: Number },
    GrandTotal: { type: Number },
    Note: { type: String },
    CreatedDate: { type: Date, default: Date.now() },
  },
  { versionKey: false }
);

const PurchaseModel = mongoose.model("purchases", purchasesSchema);

module.exports = PurchaseModel;