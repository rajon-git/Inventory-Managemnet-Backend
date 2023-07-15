const express = require("express");
const router = express.Router();

const AuthVerifyMiddleware =require("../middlewares/AuthVerifyMiddleware");
const {Registration,Login,Read,UpdateProfile,VerifyEmail,VerifyOtp,ResetPassword}= require ("../controllers/Users/UsersController")
// Brand Controller modules
const BrandsControllers = require('../controllers/brands/BrandsController');
// users Router
router.post("/registration",Registration);
router.post("/login",Login);
router.post("/profileupdate",AuthVerifyMiddleware,UpdateProfile);
router.get("/profiledetails",AuthVerifyMiddleware,Read);
router.get("/recoverEmail/:email",VerifyEmail)
router.get("/verifyOtp/:email/:otp",VerifyOtp)
router.post("/resetPassword",ResetPassword)

//brand 


router.post("/createBrand",AuthVerifyMiddleware,BrandsControllers.CreateBrand);
router.post("/updateBrand/:id",AuthVerifyMiddleware,BrandsControllers.UpdateBrand);
router.get("/brandList/:pageNo/:perPage/:searchKeyword",AuthVerifyMiddleware,BrandsControllers.BrandList);
router.get("/brandDropDown",AuthVerifyMiddleware,BrandsControllers.BrandDropDown);

module.exports = router;
