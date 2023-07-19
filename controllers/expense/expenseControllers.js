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

// Create Expense
exports.CreateExpense = async (req, res) => {
  let result = await CreateService(req, ExpenseModel);
  res.status(201).json(result);
};

// // Expense Details
// exports.ExpenseDetails = async (req, res) => {
//   let result = await DetailsByIDService(req,ExpenseModel);
//   res.status(200).json(result);
// };





// // Delete Expense
// exports.DeleteExpense = async (req, res) => {
//   let result = await DeleteService(req, ExpenseModel);
//   res.status(200).json(result);
// };