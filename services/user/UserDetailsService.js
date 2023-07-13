/**
 * Date: 13/07/2023
 * Subject: Inventory Project services
 * Auth: Rajon
 */

const UserDetailsService = async (request, dataModel) => {
    try {
      let data = await dataModel.aggregate([
        { $match: { UserEmail: request.headers["email"] } },
      ]);
  
      if (data) {
        return { status: "success", data: data };
      }
    } catch (error) {
      return { status: "fail", error: error.message };
    }
  };
  
  module.exports = UserDetailsService;