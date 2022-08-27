
const LOGIN = require('../model/login');
exports.createLoginController = async(req,res,err)=>{
    try {
        console.log("called");
        const {username,password,role}=req.body
    const data = await LOGIN.createLogin(username,password,role);
    return res.status(200).json({
        data,
        msg:"loginDetails created successfully!"
    });
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            err:error.messages || " Error while creating category"
        })
    }
}
exports.getLoginController = async(req,res,err)=>{
    const data = await LOGIN.getlogin();
    return res.status(200).json(data[0]);
}