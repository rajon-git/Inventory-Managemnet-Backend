/**
 * Date: 13/07/2023
 * Subject: Inventory Project services
 * Auth: Rajon
 */


const SendEmail = require("../../utilities/SendEmail");
const OTPModel=require("../../models/Users/OTPSModel");
// // e-mail
// const sgMail = require("@sendgrid/mail");
// sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const UserVerifyEmailService = async (request, dataModel) => {
  try {
    //Email query
    const { email } = request.params;
    let OTPCode = Math.floor(100000 + Math.random() * 900000);

    let userCount = await dataModel.aggregate([
      { $match: {UserEmail: email } },
      { $count: "total" },
    ]);

    if (userCount.length >0) 

    //otp create
    await OTPModel.create({ UserEmail:email, otp: OTPCode });

    //send email
    let sendEmail = await SendEmail(
      email,
      `Your PIN Code is => ${OTPCode}`,
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