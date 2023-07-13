/**
 * Date: 13/07/2023
 * Subject: Inventory Project services
 * Auth: Rajon
*/

const UserVerifyOtpService = async (request, dataModel) => {
    try {
      // parameter catch
      let email = request.params.email;
      let otpCode = request.params.otp;
      let status = 0;
      let statusUpdate = 1;
  
      let otpCount = await dataModel.aggregate([
        { $match: {UserEmail:email, otp: otpCode, status } },
        { $count: "total" },
      ]);
  
      if (otpCount.length > 0) {
        //otp update
        let OTPUpdate = await dataModel.updateOne(
          { UserEmail:email, otp: otpCode, status },
          { status: statusUpdate }
        );
  
        return { status: "success", data: OTPUpdate };
      } else {
        return { status: "fail", data: "Invalid OTP Code!" };
      }
    } catch (error) {
      return { status: "fail", error: error.message };
    }
  };
  
  module.exports = UserVerifyOtpService;