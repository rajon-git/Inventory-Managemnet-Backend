/**
 * Date: 19/07/2023
 * Subject: Inventory Project
 * Auth: Rajon 
 */

//data base import
const { mongoose } = require("mongoose");
const ExpenseTypesModel = require("../../models/Expense/ExpenseTypesModel");

// common services import
const CreateService = require("../../services/common/CreateService");
const DropDownService = require("../../services/common/DropDownService");
const ListService = require("../../services/common/ListService");
const UpdateService = require("../../services/common/UpdateService");
const ExpenseModel = require("../../models/Expense/ExpensesModel");


// Create ExpenseTypes
exports.CreateExpenseTypes = async (req, res) => {
  let result = await CreateService(req, ExpenseTypesModel);
  res.status(201).json(result);
};

// Update ExpenseTypes
exports.UpdateExpenseTypes = async (req, res) => {
    let result = await UpdateService(req, ExpenseTypesModel);
    res.status(200).json(result);
  };

// ExpenseTypes List
exports.ExpenseTypesList = async (req, res) => {
    let SearchRex = { $regex: req.params.searchKeyword, $options: "i" };
    let SearchArray = [{ Name: SearchRex }];
    let result = await ListService(req, ExpenseTypesModel, SearchArray);
    res.status(200).json(result);
  };






