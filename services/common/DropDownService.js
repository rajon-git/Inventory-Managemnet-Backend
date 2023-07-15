
const DropDownService = async (req, dataModel, Projection) => {
    try {
      let UserEmail = req.headers["email"];
  
      let data = await dataModel.aggregate([
        { $match: { UserEmail } },
        { $project: Projection },
      ]);
  
      return { status: "success", data: data };
    } catch (error) {
      return { status: "fail", error: error.message };
    }
  };
  
  module.exports = DropDownService;