/**
 * Date: 13/07/2023
 * Subject: Inventory Project services
 * Auth: Rajon
 */

const OTPSModel = require("../../models/Users/OTPSModel");

const UserResetPassService = async (request, dataModel) => {
  let { email, otp, password } = request.body;
  let status = 1;
  try {
    let otpCount = await OTPSModel.aggregate([
      { $match: { UserEmail:email, otp, status } },
      { $count: "total" },
    ]);

    if (otpCount.length > 0) {
      let updatePass = await dataModel.updateOne({ UserEmail:email }, { password });
      return { status: "success", data: updatePass };
    } else {
      return { status: "fail", data: "Invalid Request" };
    }
  } catch (error) {
    // console.log(error);
    return { status: "fail", error: error.message };
  }
};

module.exports = UserResetPassService;
