/**
 * Date: 26/07/2023
 * Subject: Inventory Project Details By ID  Service services
 * Auth: Rajon
 */

const mongoose = require("mongoose");
const DetailsByIDService= async (Request,DataModel) => {
    try{

        let id=Request.params.id;
        let UserEmail=Request.headers['email'];

        const ObjectId = mongoose.Types.ObjectId;
        let QueryObject={};
        QueryObject['_id']=new ObjectId(id);
        QueryObject['UserEmail']=UserEmail;


        let data = await DataModel.aggregate([
            {$match: QueryObject}
        ])
        return {status: "success", data: data}
    }
    catch (error) {
        return {status: "fail", data: error}
    }
}
module.exports=DetailsByIDService
