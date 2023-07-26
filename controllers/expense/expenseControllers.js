/**
 * Date: 19/07/2023
 * Subject: Inventory Project
 * Auth: Rajon
 */

//data base import
const ExpenseModel = require("../../models/Expense/ExpensesModel");

// common services import
const CreateService = require("../../services/common/CreateService");
const ListOneJoinService = require("../../services/common/listOneJoinService");
const UpdateService = require("../../services/common/UpdateService");
const DeleteService = require("../../services/common/deleteService");
const DetailsByIDService = require("../../services/common/detailsByIdService");

// Create Expense
exports.CreateExpense = async (req, res) => {
  let result = await CreateService(req, ExpenseModel);
  res.status(201).json(result);
};

// Expense Details
exports.ExpenseDetails = async (req, res) => {
  let result = await DetailsByIDService(req,ExpenseModel);
  res.status(200).json(result);
};

// Expense List
exports.ExpenseList = async (req, res) => {
    let SearchRgx = { $regex: req.params.searchKeyword, $options: "i" };
    let SearchArray = [
      { Amount: SearchRgx },
      { Note: SearchRgx },
      { "Type.Name": SearchRgx },
    ];
    let JoinStage = {$lookup: {from: "expensetypes", localField: "TypeID", foreignField: "_id", as: "Type"}}
    let result = await ListOneJoinService(req, ExpenseModel, SearchArray,JoinStage);
    res.status(200).json(result);
  };
  

// UpdateExpense
exports.UpdateExpense = async (req, res) => {
    let result = await UpdateService(req, ExpenseModel);
    res.status(200).json(result);
  };



// Delete Expense
exports.DeleteExpense = async (req, res) => {
  let result = await DeleteService(req, ExpenseModel);
  res.status(200).json(result);
};
