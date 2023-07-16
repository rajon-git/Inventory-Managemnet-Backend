const express = require("express");
const router = express.Router();

const AuthVerifyMiddleware =require("../middlewares/AuthVerifyMiddleware");
const {Registration,Login,Read,UpdateProfile,VerifyEmail,VerifyOtp,ResetPassword}= require ("../controllers/Users/UsersController")
// Brand Controller modules
const BrandsControllers = require('../controllers/brands/BrandsController');
const CategoriesControllers=require("../controllers/category/CategoryController");
const CustomersControllers=require("../controllers/customers/CustomerControllers");
const SuppliersControllers=require("../controllers/Suppliers/SuppliersController")
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

// Categories Routing
router.post("/createCategories",AuthVerifyMiddleware,CategoriesControllers.CreateCategories);
router.post("/updateCategories/:id",AuthVerifyMiddleware,CategoriesControllers.UpdateCategories);
router.get("/categoriesList/:pageNo/:perPage/:searchKeyword",AuthVerifyMiddleware,CategoriesControllers.CategoriesList);
router.get("/categoriesDropDown",AuthVerifyMiddleware,CategoriesControllers.CategoriesDropDown);
// router.get("/deleteCategories/:id",AuthVerifyMiddleware,CategoriesControllers.DeleteCategories);
// router.get("/categoriesDetails/:id",AuthVerifyMiddleware,CategoriesControllers.CategoriesDetails);

// Customers Routing
router.post("/createCustomers",AuthVerifyMiddleware,CustomersControllers.CreateCustomers);
router.post("/updateCustomers/:id",AuthVerifyMiddleware,CustomersControllers.UpdateCustomers);
router.get("/customersList/:pageNo/:perPage/:searchKeyword",AuthVerifyMiddleware,CustomersControllers.CustomersList);
router.get("/customersDropDown",AuthVerifyMiddleware,CustomersControllers.CustomersDropDown);
// router.get("/deleteCustomers/:id",AuthVerifyMiddleware,CustomersControllers.DeleteCustomers);
// router.get("/customersDetails/:id",AuthVerifyMiddleware,CustomersControllers.CustomersDetails);

// Suppliers Routing
router.post("/createSuppliers",AuthVerifyMiddleware,SuppliersControllers.CreateSuppliers);
router.post("/updateSuppliers/:id",AuthVerifyMiddleware,SuppliersControllers.UpdateSuppliers);
router.get("/suppliersList/:pageNo/:perPage/:searchKeyword",AuthVerifyMiddleware,SuppliersControllers.SuppliersList);
router.get("/suppliersDropDown",AuthVerifyMiddleware,SuppliersControllers.SuppliersDropDown);
// router.get("/deleteSupplier/:id",AuthVerifyMiddleware,SuppliersControllers.DeleteSuppliers);
// router.get("/supplierDetails/:id",AuthVerifyMiddleware,SuppliersControllers.SuppliersDetails);
module.exports = router;
