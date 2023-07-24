/**
 * Date: 24/07/2023
 * Subject: Inventory Project return controller
 * Auth: Rajon
 */
//data base import
const ParentModel = require("../../models/Sales/SalesModel");
const ChildeModel = require("../../models/Sales//SalesProductsModel");
const ParentChildeService = require("../../services/common/createParentChildsService");
const DeleteParentChildeService = require("../../services/common/deleteParentChildsService");
const ListOneJoinService = require("../../services/common/listOneJoinService");

// Create Sales
exports.CreateSales = async (req, res) => {
    let Result = await ParentChildeService(
      req,
      ParentModel,
      ChildeModel,
      "SaleID"
    );
    res.status(200).json(Result);
  };

  // Sales List
exports.SalesList = async (req, res) => {
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
  