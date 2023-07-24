const express = require("express");
const router = express.Router();

const AuthVerifyMiddleware =require("../middlewares/AuthVerifyMiddleware");
const {Registration,Login,Read,UpdateProfile,VerifyEmail,VerifyOtp,ResetPassword}= require ("../controllers/Users/UsersController")
// Brand Controller modules
const BrandsControllers = require('../controllers/brands/BrandsController');
const CategoriesControllers=require("../controllers/category/CategoryController");
const CustomersControllers=require("../controllers/customers/CustomerControllers");
const SuppliersControllers=require("../controllers/Suppliers/SuppliersController");
const ExpenseType=require("../controllers/expense/expenseTypeControllers")
const Expenses=require("../controllers/expense/expenseControllers")
const ProductController=require("../controllers/Product/productControllers")
const PurchasesController=require("../controllers/Product/productControllers")
const SalesController=require("../controllers/Sales/SalesController")
const ReturnController=require("../controllers/Return/ReturnController")
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

// Expense Types Routing
router.post("/createExpenseType",AuthVerifyMiddleware,ExpenseType.CreateExpenseTypes);
router.post("/updateExpenseType/:id",AuthVerifyMiddleware,ExpenseType.UpdateExpenseTypes);
router.get("/expenseTypeList/:pageNo/:perPage/:searchKeyword",AuthVerifyMiddleware,ExpenseType.ExpenseTypesList);
router.get("/expenseTypeDropDown",AuthVerifyMiddleware,ExpenseType.ExpenseTypesDropDown);
//router.get("/deleteExpenseType/:id",AuthVerifyMiddleware,ExpenseType.DeleteExpenseTypes);
//router.get("/expenseTypeDetails/:id",AuthVerifyMiddleware,ExpenseType.ExpenseTypesDetails);

// Expense Routing
router.post("/createExpense",AuthVerifyMiddleware,Expenses.CreateExpense);
router.post("/updateExpense/:id",AuthVerifyMiddleware,Expenses.UpdateExpense);
router.get("/expenseList/:pageNo/:perPage/:searchKeyword",AuthVerifyMiddleware,Expenses.ExpenseList);
// router.get("/deleteExpense/:id",AuthVerifyMiddleware,Expenses.DeleteExpense);
// router.get("/expenseDetails/:id",AuthVerifyMiddleware,Expenses.ExpenseDetails);

// Product Routing
router.post("/createProduct",AuthVerifyMiddleware,ProductController.CreateProduct);
router.post("/updateProduct/:id",AuthVerifyMiddleware,ProductController.UpdateProduct);
router.get("/productList/:pageNo/:perPage/:searchKeyword",AuthVerifyMiddleware,ProductController.ProductList);
// router.get("/deleteProduct/:id",AuthVerifyMiddleware,ProductController.DeleteProduct);
// router.get("/productDetails/:id",AuthVerifyMiddleware,ProductController.ProductDetails);
// router.get("/productDropDown",AuthVerifyMiddleware,ProductController.ProductsDropDown);

// Purchases
router.post("/createPurchases",AuthVerifyMiddleware,PurchasesController.CreatePurchases);
router.get("/purchasesList/:pageNo/:perPage/:searchKeyword",AuthVerifyMiddleware,PurchasesController.PurchasesList);
router.get("/deletePurchase/:id",AuthVerifyMiddleware,PurchasesController.DeletePurchases);

// Sales
router.post("/createSales",AuthVerifyMiddleware,SalesController.CreateSales);
router.get("/salesList/:pageNo/:perPage/:searchKeyword",AuthVerifyMiddleware,SalesController.SalesList);
// router.get("/deleteSales/:id",AuthVerifyMiddleware,SalesController.DeleteSales);

// Return 
router.post("/createReturn",AuthVerifyMiddleware,ReturnController.CreateReturn);
router.get("/returnList/:pageNo/:perPage/:searchKeyword",AuthVerifyMiddleware,ReturnController.ReturnList);
// router.get("/deleteReturn/:id",AuthVerifyMiddleware,ReturnController.DeleteReturn);
module.exports = router;
