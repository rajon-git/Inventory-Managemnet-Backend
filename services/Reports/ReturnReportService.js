/**
 * Date: 26/07/2023
 * Subject: Inventory Project purchase services Report
 * Auth: Rajon
 */

const ReturnProductsModel = require("../../models/Return/ReturnsProductsModel");

const ReturnReportService = async (req) => {
  try {
    let UserEmail = req.headers["UserEmail"];
    let { FormDate, ToDate } = req.body;

    const data = await ReturnProductsModel.aggregate([
      {
        $match: {
          UserEmail: UserEmail,
          CreatedDate: { $gte: new Date(FormDate), $lte: new Date(ToDate) },
        },
      },
      {
        $facet: {
          Total: [{ $group: { _id: 0, TotalAmount: { $sum: "$Total" } } }],
          Rows: [
            {
              $lookup: {
                from: "products",
                localField: "ProductID",
                foreignField: "_id",
                as: "products",
              },
            },
            { $unwind: "$products" },
            {
              $lookup: {
                from: "brands",
                localField: "products.BrandID",
                foreignField: "_id",
                as: "brands",
              },
            },
            {
              $lookup: {
                from: "categories",
                localField: "products.CategoryID",
                foreignField: "_id",
                as: "categories",
              },
            },
          ],
        },
      },
    ]);

    return { status: "success", data: data };
  } catch (error) {
    return { status: "fail", error: error.message };
  }
};

module.exports = ReturnReportService;