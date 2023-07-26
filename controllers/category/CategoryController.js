

//data base import
const { mongoose } = require("mongoose");
const CategoriesModel = require("../../models/Categories/CategoriesModel");
const ProductModel = require("../../models/Products/ProductModel");

// common services import
const CreateService = require("../../services/common/CreateService");
const DropDownService = require("../../services/common/DropDownService");
const ListService = require("../../services/common/ListService");
const UpdateService = require("../../services/common/UpdateService");
const DeleteService = require("../../services/common/deleteService");
const CheckAssociateService = require("../../services/common/checkAssociateService");
const DetailsByIDService = require("../../services/common/detailsByIdService");

// Create Categories
exports.CreateCategories = async (req, res) => {
  let result = await CreateService(req, CategoriesModel);
  res.status(201).json(result);
};

// // Categories Details
// exports.CategoriesDetails = async (req, res) => {
//   let result = await DetailsByIDService(req,CategoriesModel);
//   res.status(200).json(result);
// };

// Update Categories
exports.UpdateCategories = async (req, res) => {
  let result = await UpdateService(req, CategoriesModel);
  res.status(200).json(result);
};

// Categories List
exports.CategoriesList = async (req, res) => {
  let SearchRex = { $regex: req.params.searchKeyword, $options: "i" };
  let SearchArray = [{ Name: SearchRex }];
  let result = await ListService(req, CategoriesModel, SearchArray);
  res.status(200).json(result);
};

// Categories Drop Down
exports.CategoriesDropDown = async (req, res) => {
  let result = await DropDownService(req, CategoriesModel, { _id: 1, Name: 1 });
  res.status(200).json(result);
};

// Categories Details
exports.CategoriesDetails = async (req, res) => {
  let result = await DetailsByIDService(req,CategoriesModel);
  res.status(200).json(result);
};

// Delete Categories
exports.DeleteCategories = async (req, res) => {
  let DeleteId = req.params.id;
  let {ObjectId} = mongoose.Types;
  let CheckAssociate = await CheckAssociateService({CategoryID: new ObjectId(DeleteId)},ProductModel);

  if (CheckAssociate) {
    res.status(200).json({status: "associate", data: "Associate with Product"});
  } else {
    let result = await DeleteService(req,CategoriesModel)
    res.status(200).json(result);
  }
};
