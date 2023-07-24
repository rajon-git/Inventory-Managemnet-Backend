/**
 * Date: 19/07/2023
 * Subject: Inventory Project purchase services
 * Auth: Rajon
 */

const mongoose = require("mongoose");

const ParentChildeService = async ( req,ParentModel,ChildeModel,JoinPropertyName) => {
  // Create Transaction Session
  const session = await mongoose.startSession();

  try {
    // Begin Transaction Session
    session.startTransaction();

    // First DataBase Process
    let Parent = req.body["Parent"];
    Parent.UserEmail = req.headers["UserEmail"];
    let ParentCreation = await ParentModel.create([Parent], { session });

    // Second Database Process
    let Childe = req.body["Childe"];
    await Childe.forEach((ele) => {
      ele[JoinPropertyName] = ParentCreation[0]["_id"];
      ele["UserEmail"] = req.headers["email"];
    });
    // Data inserts
    let ChildeCreation = await ChildeModel.insertMany(Childe, { session });

    // Transaction success
    await session.commitTransaction();
    session.endSession();

    // response
    return {
      status: "success",
      parent: ParentCreation,
      childe: ChildeCreation,
    };
  } catch (error) {
    console.log(error)
    // Roll Back Transaction if Fail
    await session.abortTransaction();
    session.endSession();
    return { status: "fail", data: error.message };
  }
};

module.exports = ParentChildeService;
