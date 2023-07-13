const express = require("express");
const router = express.Router();

const {Registration,Login}= require ("../controllers/Users/UsersController")
// users Router
router.post("/registration",Registration);
router.post("/login",Login);


module.exports = router;