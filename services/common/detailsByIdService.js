/**
 * Date: 26/07/2023
 * Subject: Inventory Project Details By ID  Service services
 * Auth: Rajon
 */

const  mongoose  = require("mongoose");

const DetailsByIDService = async (req, dataModel) => {
  try {
    let { id } = req.params;
    let UserEmail = req.headers["UserEmail"];

    const { ObjectId } = mongoose.Types;
    let QueryObject = {};
    QueryObject["_id"] = ObjectId(id);
    QueryObject["UserEmail"] = UserEmail;

    const data = await dataModel.aggregate([{$match: QueryObject}]);

    return { status: "success", data: data };
  } catch (error) {
    return { status: "fail", data: error.message };
  }
};

module.exports = DetailsByIDService;