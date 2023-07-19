/**
 * Date: 19/07/2023
 * Subject: Inventory Project services
 * Auth: Rajon
 */

const ListTwoJoinService = async (
    req,
    dataModel,
    SearchArray,
    JoinStage1,
    JoinStage2
  ) => {
    try {
      let pageNo = Number(req.params.pageNo);
      let perPage = Number(req.params.perPage);
      let searchValue = req.params.searchKeyword;
      let UserEmail = req.headers["email"];
  
      let skipRow = (pageNo - 1) * perPage;
  
      let data;
  
      if (searchValue !== "0") {
        let SearchQuery = { $or: SearchArray };
        data = await dataModel.aggregate([
          { $match: { UserEmail } },
          JoinStage1,
          JoinStage2,
          { $match: SearchQuery },
          {
            $facet: {
              Total: [{ $count: "count" }],
              Rows: [{ $skip: skipRow }, { $limit: perPage }],
            },
          },
        ]);
      } else {
        data = await dataModel.aggregate([
          { $match: { UserEmail } },
          JoinStage1,
          JoinStage2,
          {
            $facet: {
              Total: [{ $count: "count" }],
              Rows: [{ $skip: skipRow }, { $limit: perPage }],
            },
          },
        ]);
      }
  
      return { status: "success", data: data };
    } catch (error) {
      // console.log(error)
      return { status: "fail", error: error.message };
    }
  };
  
  module.exports = ListTwoJoinService;