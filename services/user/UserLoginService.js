/**
 * Date: 13/07/2023
 * Subject: Inventory Project services
 * Auth: Rajon
 */

const CreateToken = require("../../utilities/CreateToken");

const UserLoginService = async (request, dataModel) => {
    try {
      let data = await dataModel.aggregate([
        { $match: request.body },
        {$project:{_id:0,UserEmail:1,firstName:1,lastName:1,mobile:1,photo:1}}
      ]);
  
      if (data.length > 0) {
        let token = await CreateToken(data[0]['UserEmail']);
        return { status: "success", data: data,token };
      }else{
        return {status:"unauthorized"}
      }
    } catch (error) {
      return { status: "fail", error: error.message };
    }
  };
  
  module.exports = UserLoginService;
  