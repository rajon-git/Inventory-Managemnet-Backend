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