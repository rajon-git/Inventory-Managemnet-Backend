/**
 * Date: 26/07/2023
 * Subject: Inventory Project Returns Report Service
 * Auth: Rajon
 */

const ReturnsModel = require("../../models/Return/ReturnsModel");

const ReturnSummaryService = async (req) => {
  try {
    let UserEmail = req.headers["UserEmail"];

    let data = await ReturnsModel.aggregate([
      {
        $match: {
          UserEmail: UserEmail,
        },
      },
      {
        $facet: {
          Total: [{ $group: { _id: 0, TotalAmount: { $sum: "$GrandTotal" } } }],
          Last30Days: [
            {
              $group: {
                _id: {
                  $dateToString: { format: "%Y-%m-%d", date: "$CreatedDate" },
                },
                TotalAmount: { $sum: "$GrandTotal" },
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

module.exports = ReturnSummaryService;