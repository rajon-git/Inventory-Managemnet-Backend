/**
 * Date: 26/07/2023
 * Subject: Inventory Project Summary controller
 * Auth: Rajon
 */

const ExpenseSummaryService = require("../../services/Summary/ExpenseSummaryService");
const PurchaseSummaryService = require("../../services/Summary/PurchaseSummaryService");
const ReturnSummaryService = require("../../services/Summary/ReturnSummaryService");
const SalesSummaryService = require("../../services/Summary/SalesSummaryService");

// ExpensesSummary
exports.ExpensesSummary=async (req, res) => {
    let Result=await ExpenseSummaryService(req)
    res.status(200).json(Result);
}

// ReturnSummary
exports.ReturnSummary=async (req, res) => {
    let Result=await ReturnSummaryService(req)
    res.status(200).json(Result);
}


