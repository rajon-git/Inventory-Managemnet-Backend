

//data base import
const { mongoose } = require("mongoose");
const CustomersModel = require("../../models/Customers/CustomersModel");

// common services import
const CreateService = require("../../services/common/CreateService");
const DropDownService = require("../../services/common/DropDownService");
const ListService = require("../../services/common/ListService");
const UpdateService = require("../../services/common/UpdateService");
const DeleteService = require("../../services/common/deleteService");
// const CheckAssociateService = require("../../services/common/checkAssociateService");
// const SalesModel = require("../../models/Sales/SalesModel");
// const DetailsByIDService = require("../../services/common/detailsByIdService");

// Create Customers
exports.CreateCustomers = async (req, res) => {
  let result = await CreateService(req, CustomersModel);
  res.status(201).json(result);
};

// // Categories Details
// exports.CustomersDetails = async (req, res) => {
//   let result = await DetailsByIDService(req,CustomersModel);
//   res.status(200).json(result);
// };

// Update Customers
exports.UpdateCustomers = async (req, res) => {
  let result = await UpdateService(req, CustomersModel);
  res.status(200).json(result);
};

// Customers List
exports.CustomersList = async (req, res) => {
  let SearchRgx = { $regex: req.params.searchKeyword, $options: "i" };
  let SearchArray=[{CustomerName: SearchRgx},{Phone: SearchRgx},{Email: SearchRgx},{Address: SearchRgx}]
  let result = await ListService(req, CustomersModel, SearchArray);
  res.status(200).json(result);
};

// Customers DropDown
exports.CustomersDropDown = async (req, res) => {
  let result = await DropDownService(req, CustomersModel, { _id: 1,CustomerName: 1 });
  res.status(200).json(result);
};

// Delete Categories
exports.DeleteCustomers = async (req, res) => {
  let DeleteId = req.params.id;
  let {ObjectId} = mongoose.Types;
  let CheckAssociate = await CheckAssociateService({CustomerID:ObjectId(DeleteId)},SalesModel);

  if (CheckAssociate) {
    res.status(200).json({status: "associate", data: "Associate with Product"});
  } else {
    let result = await DeleteService(req, CustomersModel)
    res.status(200).json(result);
  }
};