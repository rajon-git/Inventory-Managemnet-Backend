const CreateService = async (req, dataModel) => {
    try {
      let postBody = req.body;
      postBody.UserEmail = req.headers["email"];
  
      let data = await dataModel.create(postBody);
      return { status: "success", data: data };
    } catch (error) {
      return { status: "fail", error: error.message };
    }
  };
  
  module.exports = CreateService;