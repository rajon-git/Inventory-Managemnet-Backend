/**
 * Date: 13/04/2023
 * Subject: Inventory Project services
 * Auth: Ismile Sardar
 */

const OtpModel = require("../../models/Users/OTPSModel");

const UserResetPassService = async (request, dataModel) => {
  let { email, otp, password } = request.body;
  let status = 1;
  try {
    let otpCount = await OtpModel.aggregate([
      { $match: { email, otp, status } },
      { $count: "total" },
    ]);

    if (otpCount.length > 0) {
      let updatePass = await dataModel.updateOne({ email }, { password });
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