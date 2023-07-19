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

  // Update Product
  exports.UpdateProduct = async (req, res) => {
    let result = await UpdateService(req, ProductModel);
    res.status(200).json(result);
  };
  


  // Product List
  exports.ProductList = async (req, res) => {
    let SearchRgx = { $regex: req.params.searchKeyword, $options: "i" };
    let SearchArray = [
      { Name: SearchRgx },
      { Unit: SearchRgx },
      { Details: SearchRgx },
      { "brands.Name": SearchRgx },
      { "categories.Name": SearchRgx },
    ];
    let JoinStage1 = {
      $lookup: {
        from: "brands",
        localField: "BrandID",
        foreignField: "_id",
        as: "brands",
      },
    };
  
    let JoinStage2 = {
      $lookup: {
        from: "categories",
        localField: "CategoryID",
        foreignField: "_id",
        as: "categories",
      },
    };
  
    let result = await ListTwoJoinService(
      req,
      ProductModel,
      SearchArray,
      JoinStage1,
      JoinStage2
    );
  
    res.status(200).json(result);
  };
  
  