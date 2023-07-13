/**
 * Date: 11/07/2023
 * Subject: Inventory Project All package require
 * Auth: Rajon
 */
const UserModel = require("../../models/Users/UsersModel");

// Service module
const UserCreateService = require("../../services/user/UserCreateService");
const UserLoginService = require("../../services/user/UserLoginService");

// Users Registration
const Registration = async (req, res) => {
    let result = await UserCreateService(req, UserModel);
    // user Response
    res.status(201).json(result);
  };

//users login

const Login = async (req, res) => {
  let result = await UserLoginService(req, UserModel);
  // user Response
  res.status(201).json(result);
};

module.exports ={Registration,Login}


