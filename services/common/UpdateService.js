

const UpdateService = async (req, dataModel) => {
    try {
      let UserEmail = req.headers["email"];
      let { id } = req.params;
      let postBody = req.body;
  
      let data = await dataModel.updateOne({ _id: id, UserEmail }, postBody);
      // console.log(data)
      return { status: "success", data: data };
    } catch (error) {
      return { status: "fail", error: error.message };
    }
  };
  
  module.exports = UpdateService;