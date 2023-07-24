/**
 * Date: 24/07/2023
 * Subject: Inventory Project return controller
 * Auth: Rajon
 */
//data base import
const ParentModel = require("../../models/Return/ReturnsModel");
const ChildeModel = require("../../models/Return/ReturnsProductsModel");
const ParentChildeService = require("../../services/common/createParentChildsService");
const ListOneJoinService = require("../../services/common/listOneJoinService");
const DeleteParentChildeService = require("../../services/common/deleteParentChildsService");

// Create Return
exports.CreateReturn = async (req, res) => {
    let Result = await ParentChildeService(
      req,
      ParentModel,
      ChildeModel,
      "ReturnID"
    );
    res.status(200).json(Result);
  };

  // Return List
exports.ReturnList = async (req, res) => {
    let SearchRgx = { $regex: req.params.searchKeyword, $options: "i" };
    let SearchArray = [
      { Note: SearchRgx },
      { "customers.CustomerName": SearchRgx },
      { "customers.Address": SearchRgx },
      { "customers.Phone": SearchRgx },
      { "customers.Email": SearchRgx },
    ];
    let JoinStage = {
      $lookup: {
        from: "customers",
        localField: "CustomerID",
        foreignField: "_id",
        as: "customers",
      },
    };
    let result = await ListOneJoinService(
      req,
      ParentModel,
      SearchArray,
      JoinStage
    );
    res.status(200).json(result);
  };
  
// Delete Return
exports.DeleteReturn = async (req, res) => {
    let Result = await DeleteParentChildeService(
      req,
      ParentModel,
      ChildeModel,
      "ReturnID"
    );
    res.status(200).json(Result);
  };