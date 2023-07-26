/**
 * Date: 24/07/2023
 * Subject: Inventory Project purchase controller
 * Auth: Rajon
 */

const ExpenseReportService = require("../../services/Reports/ExpenseReportService");
const PurchasesReportService = require("../../services/Reports/PurchasesReportService");
const ReturnReportService = require("../../services/Reports/ReturnReportService");
const SalesReportService = require("../../services/Reports/SalesReportService");

// Expenses Report By Date
exports.ExpensesByDate = async (req, res) => {
  let result = await ExpenseReportService(req);
  return res.status(200).json(result);
};

// Purchase Report By Date
exports.PurchaseByDate = async (req, res) => {
  let result = await PurchasesReportService(req);
  return res.status(200).json(result);
};

// Return Report By Date
exports.ReturnByDate = async (req, res) => {
  let result = await ReturnReportService(req);
  return res.status(200).json(result);
};
