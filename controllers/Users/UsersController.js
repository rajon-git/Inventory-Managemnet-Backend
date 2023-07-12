/**
 * Date: 11/07/2023
 * Subject: Inventory Project All package require
 * Auth: Rajon
 */
const UserModel = require("../../models/Users/UsersModel");

// Service module
const UserCreateService = require("../../services/user/UserCreateService");

// Users Registration
const Registration = async (req, res) => {
    let result = await UserCreateService(req, UserModel);
    // user Response
    res.status(201).json(result);
  };
//user login 
const Login=async(req,res)=>{
    let Result=await UserLoginService(req,DataModel)
    res.status(200).json(Result)

module.exports ={Registration,Login}
