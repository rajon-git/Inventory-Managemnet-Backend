const express = require("express");
const router = express.Router();

const AuthVerifyMiddleware =require("../middlewares/AuthVerifyMiddleware");
const {Registration,Login,Read,Update,VerifyEmail,VerifyOtp,ResetPassword}= require ("../controllers/Users/UsersController")
// users Router
router.post("/registration",Registration);
router.post("/login",Login);
router.post("/profileupdate",AuthVerifyMiddleware,Update);
router.get("/profiledetails",AuthVerifyMiddleware,Read);
router.get("/recoverEmail/:email",VerifyEmail)
router.get("/verifyOtp/:email/:otp",VerifyOtp)
router.post("/resetPassword",ResetPassword)




module.exports = router;
