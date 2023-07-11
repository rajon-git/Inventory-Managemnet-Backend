/**
 * Date: 11/07/2023
 * Subject: Inventory Project sales model
 * Auth: Rajon
*/

const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const salesSchema = new mongoose.Schema(
  {
    UserEmail: { type: String },
    CustomerID: { type: ObjectId },
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

const SalesModel = mongoose.model("sales", salesSchema);

module.exports = SalesModel;