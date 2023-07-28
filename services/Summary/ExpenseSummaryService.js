/**
 * Date: 26/07/2023
 * Subject: Inventory Project Summary Report Service
 * Auth: Rajon
**/
const ExpenseModel = require("../../models/Expense/ExpensesModel");

const ExpenseSummaryService = async (req) => {
  try {
    let UserEmail = req.headers["email"];

    let data = await ExpenseModel.aggregate([
      {
        $match: {
          UserEmail: UserEmail,
        },
      },
      {
        $facet: {
          Total: [{ $group: { _id: 0, TotalAmount: { $sum: "$Amount" } } }],
          Last30Days: [
            {
              $group: {
                _id: {
                  $dateToString: { format: "%Y-%m-%d", date: "$CreatedDate" },
                },
                TotalAmount: { $sum: "$Amount" },
              },
            },
            { $sort: { _id: -1 } },
            { $limit: 30 },
          ],
        },
      },
    ]);
    return { status: "success", data: data };
  } catch (error) {
    return { status: "fail", error: error.message };
  }
};

module.exports = ExpenseSummaryService;
