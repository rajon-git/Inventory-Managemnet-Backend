/**
 * Date: 19/07/2023
 * Subject: Inventory Project
 * Auth: Rajon
 */

//data base import
const { mongoose } = require("mongoose");
const ProductModel = require("../../models/Products/ProductModel");

// common services import
const CreateService = require("../../services/common/CreateService");
const ListTwoJoinService = require("../../services/common/listTwoJoinService");
const UpdateService = require("../../services/common/UpdateService");
const DeleteService = require("../../services/common/deleteService");
const CheckAssociateService = require("../../services/common/checkAssociateService");
const SaleProductsModel = require("../../models/Sales/SalesProductsModel");
const ReturnProductsModel = require("../../models/Return/ReturnProductsModel");
const PurchaseProductsModel = require("../../models/Purchases/PurchaseProductsModel");
const DetailsByIDService = require("../../services/common/detailsByIdService");
const DropDownService = require("../../services/common/DropDownService");

// Create Product
exports.CreateProduct = async (req, res) => {
  let result = await CreateService(req, ProductModel);
  res.status(201).json(result);
};

