/**
 * Date: 17/04/2023
 * Subject: Inventory Project purchase controller
 * Auth: Ismile Satdar
 */

//data base import
const ParentModel = require("../../models/Purchases/PurchasesModel");
const ChildeModel = require("../../models/Purchases/PurchaseProdutsModel");
const ParentChildeService = require("../../services/common/createParentChildsService");
const ListOneJoinService = require("../../services/common/listOneJoinService");
const DeleteParentChildeService = require("../../services/common/deleteParentChildsService");

// Create Purchases
exports.CreatePurchases = async (req, res) => {
  let Result = await ParentChildeService(req,ParentModel,ChildeModel,"PurchaseID");
  res.status(200).json(Result);
};

// Purchases List
exports.PurchasesList = async (req, res) => {
  let SearchRgx = { $regex: req.params.searchKeyword, $options: "i" };
  let SearchArray = [
    { Note: SearchRgx },
    { "suppliers.Name": SearchRgx },
    { "suppliers.Address": SearchRgx },
    { "suppliers.Phone": SearchRgx },
    { "suppliers.Email": SearchRgx },
  ];
  let JoinStage = {
    $lookup: {
      from: "suppliers",
      localField: "SupplierID",
      foreignField: "_id",
      as: "suppliers",
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