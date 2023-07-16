
//data base import
const { mongoose } = require("mongoose");
const SuppliersModel = require("../../models/Suppliers/SuppliersModel");

// common services import
const CreateService = require("../../services/common/CreateService");
const DropDownService = require("../../services/common/DropDownService");
const ListService = require("../../services/common/ListService");
const UpdateService = require("../../services/common/UpdateService");
// const DeleteService = require("../../services/common/deleteService");
// const CheckAssociateService = require("../../services/common/checkAssociateService");
// const PurchaseModel = require("../../models/Purchases/PurchasesModel");
// const DetailsByIDService = require("../../services/common/detailsByIdService");

// Create Suppliers
exports.CreateSuppliers = async (req, res) => {
  let result = await CreateService(req, SuppliersModel);
  res.status(201).json(result);
};

// // Categories Details
// exports.SuppliersDetails = async (req, res) => {
//   let result = await DetailsByIDService(req,SuppliersModel);
//   res.status(200).json(result);
// };

// Update Suppliers
exports.UpdateSuppliers = async (req, res) => {
  let result = await UpdateService(req, SuppliersModel);
  res.status(200).json(result);
};

// Suppliers List
exports.SuppliersList = async (req, res) => {
  let SearchRgx = { $regex: req.params.searchKeyword, $options: "i" };
  let SearchArray=[{Name: SearchRgx},{Phone: SearchRgx},{Email: SearchRgx},{Address: SearchRgx}]
  let result = await ListService(req, SuppliersModel, SearchArray);
  res.status(200).json(result);
};

// Suppliers DropDown
exports.SuppliersDropDown = async (req, res) => {
  let result = await DropDownService(req, SuppliersModel, { _id: 1, Name: 1 });
  res.status(200).json(result);
};


// // Delete Suppliers
// exports.DeleteSuppliers = async (req, res) => {
//   let DeleteId = req.params.id;
//   let {ObjectId} = mongoose.Types;
//   let CheckAssociate = await CheckAssociateService({SupplierID:ObjectId(DeleteId)},PurchaseModel);

//   if (CheckAssociate) {
//     res.status(200).json({status: "associate", data: "Associate with Product"});
//   } else {
//     let result = await DeleteService(req, SuppliersModel)
//     res.status(200).json(result);
//   }
// };