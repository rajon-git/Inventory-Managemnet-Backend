/**
 * Date: 24/07/2023
 * Subject: Inventory Project purchase services
 * Auth: Rajon
 */

const mongoose = require("mongoose");

const DeleteParentChildeService = async (req,ParentModel,ChildeModel,JoinPropertyName) => {
  // Create Transaction Session
  const session = await mongoose.startSession();

  try {
    // Begin Transaction Session
    session.startTransaction();

    // Parent Creation
    let DeleteID = req.params.id;
    let UserEmail = req.headers["UserEmail"];

    // First Process
    let ParentObj = {};
    ParentObj["_id"] = DeleteID;
    ParentObj[UserEmail] = UserEmail;

    // Second Process
    let ChildeObj = {};
    ChildeObj[JoinPropertyName] = DeleteID;
    ChildeObj[UserEmail] = UserEmail;

    // First DataBase Process
    let ChildeCreation = await ChildeModel.deleteMany(ChildeObj).session(session);
    // Second Database Process
    let ParentCreation = await ParentModel.deleteMany(ParentObj).session(session);

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
    // console.log(error)
    // Roll Back Transaction if Fail
    await session.abortTransaction();
    session.endSession();
    return { status: "fail", data: error.message };
  }
};

module.exports = DeleteParentChildeService;
