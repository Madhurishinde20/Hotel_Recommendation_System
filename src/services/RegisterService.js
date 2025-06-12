let bcrypt=require("bcryptjs");
let regModel=require("../models/regmodel.js");

exports.regServiceLogic=(...regdata)=>{
    let hashedPassword=bcrypt.hashSync(regdata[4],8);
    let result=regModel.saveRegData(regdata[0],regdata[1],regdata[2],hashedPassword,regdata[3],);
    return result;
}

exports.getOriginalPassword=(username,password)=>{
    let result=regModel.getPasswordFromDB(username,password)
    result.then((user)=>{
       let bresult=bcrypt.compareSync(password,user[0].password);
        console.log("result from bcrypt:" + bresult);
    });
    return result;
}