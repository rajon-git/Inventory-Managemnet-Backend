/**
 * Date: 11/07/2023
 * Subject: Inventory Project services
 * Auth: Rajon
*/

const UserCreateService = async (req, UserModel) => {
    try {
      let postBody = req.body;
      let data = await UserModel.save(postBody);
  
      if (data) {
        return { status: "success", data: data };
      }
    } catch (error) {
      return { status: "fail", error: error };
    }
  };
  
  module.exports = UserCreateService;