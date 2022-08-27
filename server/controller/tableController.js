const TABLE = require('../model/table');

exports.createTableController = async(req,res,err)=>{
    try {
        console.log("called");
        const {tNum,Vacant}=req.body
    const data = await TABLE.createTable(tNum,Vacant);
    return res.status(200).json({
        data,
        msg:"ORDERDETAILS created successfully!"
    });
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            err:error.messages || " Error while creating category"
        })
    }
}





exports.getTableController = async(req,res,err)=>{
    const data = await TABLE.getTable();
    return res.status(200).json(data[0]);
}