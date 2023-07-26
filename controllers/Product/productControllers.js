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

const SaleProductsModel = require("../../models/Sales/SalesProductsModel");
const ReturnProductsModel = require("../../models/Return/ReturnsProductsModel");
const PurchaseProductsModel = require("../../models/Purchases/PurchaseProdutsModel");
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
  
  // Product Details
exports.ProductDetails = async (req, res) => {
  let result = await DetailsByIDService(req,ProductModel);
  res.status(200).json(result);
};

// ProductsDropDown
exports.ProductsDropDown = async (req, res) => {
  let Result= await DropDownService(req,ProductModel,{_id:1,Name:1});
  res.status(200).json(Result);
}

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
  

// Delete Product
exports.DeleteProduct = async (req, res) => {
  let DeleteId = req.params.id;
  let { ObjectId } = mongoose.Types;
  let CheckAssociate = await CheckAssociateService(
    { ProductID: ObjectId(DeleteId) },
    PurchaseProductsModel
  );
  let CheckAssociate1 = await CheckAssociateService(
    { ProductID: ObjectId(DeleteId) },
    SaleProductsModel
  );
  let CheckAssociate2 = await CheckAssociateService(
    { ProductID: ObjectId(DeleteId) },
    ReturnProductsModel
  );

  if (CheckAssociate) {
    res
      .status(200)
      .json({ status: "associate", data: "Associate with Product" });
  } else if (CheckAssociate1) {
    res
      .status(200)
      .json({ status: "associate", data: "Associate with Product" });
  } else if (CheckAssociate2) {
    res
      .status(200)
      .json({ status: "associate", data: "Associate with Product" });
  } else {
    let result = await DeleteService(req, ProductModel);
    res.status(200).json(result);
  }
};
