/**
 * Date: 11/07/2023
 * Subject: Inventory Project All package require
 * Auth: Rajon
 */
const UserModel = require("../../models/Users/UsersModel");

// Service module
const UserCreateService = require("../../services/user/UserCreateService");
const UserLoginService = require("../../services/user/UserLoginService");
const UserDetailsService = require("../../services/user/UserDetailsService");
const UserOtpVerifyService = require("../../services/user/UserOtpVerifyService");
const UserResetPassService = require("../../services/user/UserResetPassService");
const UserUpdateService = require("../../services/user/UserUpdateService");
const UserVerifyEmailService = require("../../services/user/UserVerifyEmailService");


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
  res.status(200).json(result);
};

const Read = async (req, res) => {
  let result = await UserDetailsService(req, UserModel);
  // user Response
  res.status(200).json(result);
};

const Update = async (req, res) => {
  let result = await UserUpdateService(req, UserModel);
  // user Response
  res.status(200).json(result);
};

const VerifyEmail = async (req, res) => {
  let result = await UserVerifyEmailService(req, UserModel);
  // user Response
  res.status(200).json(result);
};

const VerifyOtp = async (req, res) => {
  let result = await UserOtpVerifyService(req, UserModel);
  // user Response
  res.status(200).json(result);
};

const ResetPassword = async (req, res) => {
  let result = await UserResetPassService(req, UserModel);
  // user Response
  res.status(200).json(result);
};

module.exports ={Registration,Login,Read, Update, VerifyEmail, VerifyOtp, ResetPassword}


