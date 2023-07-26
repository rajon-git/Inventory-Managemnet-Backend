
/**
 * Date: 26/07/2023
 * Subject: Inventory Project Purchase Report Service
 * Auth: Rajon
 */

const PurchaseModel = require("../../models/Purchases/PurchasesModel");

const PurchaseSummaryService = async (req) => {
  try {
    let UserEmail = req.headers["UserEmail"];

    let data = await PurchaseModel.aggregate([
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

module.exports = PurchaseSummaryService;