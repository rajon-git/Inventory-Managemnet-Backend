const express = require("express");
const router = express.Router();

const usersController=require ("../controllers/Users/UsersController")
// users Router
router.post("/registration",usersController.Registration);

module.exports = router;