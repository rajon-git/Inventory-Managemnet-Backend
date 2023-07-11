const express = require("express");
const router = express.Router();

const {Registration}= require ("../controllers/Users/UsersController")
// users Router
router.post("/registration",Registration);

module.exports = router;