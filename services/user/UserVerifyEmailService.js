/**
 * Date: 13/07/2023
 * Subject: Inventory Project services
 * Auth: Rajon
 */

const OtpModel = require("../../models/Users/OTPSModel");
const SendEmail = require("../../utilities/SendEmail");

// // e-mail
// const sgMail = require("@sendgrid/mail");
// sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const UserVerifyEmailService = async (request, dataModel) => {
  try {
    //Email query
    const { email } = request.params;
    let otpCode = Math.floor(100000 + Math.random() * 900000);

    let userCount = await dataModel.aggregate([
      { $match: {UserEmail: email } },
      { $count: "total" },
    ]);

    if (userCount.length === 0) {
      return { status: "fail", data: "User not found!" };
    }

    //otp create
    await OtpModel.create({ UserEmail:email, otp: otpCode });

    //send email
    let sendEmail = await SendEmail(
      email,
      `Your PIN Code is => ${otpCode}`,
      "Inventory PIN Verification"
    );

    // //send E-mail
    // const msg = {
    //   to: email,
    //   from: process.env.SENDER_EMAIL,
    //   subject: "Your Otp",
    //   html: `<h1>OTP => ${otpCode}</h1>`,
    // };
    // await sgMail.send(msg);
    // "Check your Email and verify!"
    return { status: "success", data: "Check your Email and verify!" };
  } catch (error) {
    console.log(error);
    return { status: "fail", error: error.message };
  }
};

module.exports = UserVerifyEmailService;