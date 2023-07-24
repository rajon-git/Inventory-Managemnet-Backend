const mongoose  = require("mongoose");
const UserModel=require("../../models/Users/UsersModel")
const BrandModel = require("../../models/Brand/BrandsModel");


// common services import
const CreateService = require("../../services/common/CreateService");
const DropDownService = require("../../services/common/DropDownService");
const ListService = require("../../services/common/ListService");
const UpdateService = require("../../services/common/UpdateService");


// create brand
exports.CreateBrand = async (req, res) => {
    let result = await CreateService(req, BrandModel);
    // user Response
    res.status(201).json(result);
  };

// UpdateBrand
exports.UpdateBrand = async (req, res) => {
    let result = await UpdateService(req, BrandModel);
    res.status(200).json(result);
  };

// BrandList
exports.BrandList = async (req, res) => {
    let SearchRex = { $regex: req.params.searchKeyword, $options: "i" };
    let SearchArray = [{ Name: SearchRex }];
    let result = await ListService(req, BrandModel, SearchArray);
    res.status(200).json(result);
  };

// BrandDropDown
exports.BrandDropDown = async (req, res) => {
    let result = await DropDownService(req, BrandModel, { _id: 1, Name: 1 });
    res.status(200).json(result);
  };

// Delete Brand
exports.DeleteBrand = async (req, res) => {
  let DeleteId = req.params.id;
  let {ObjectId} = mongoose.Types;
  let CheckAssociate = await CheckAssociateService({BrandID:ObjectId(DeleteId)},ProductModel);

  if (CheckAssociate) {
    res.status(200).json({status: "associate", data: "Associate with Product"});
  } else {
    let result = await DeleteService(req,BrandModel)
    res.status(200).json(result);
  }
};

// module.exporst= {BrandDropDown,BrandList,UpdateBrand,CreateBrand}