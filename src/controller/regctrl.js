let regService=require("../services/RegisterService.js");
let regmodel=require("../models/regmodel.js");
let bcrypt=require("bcryptjs");
let cookie=require("cookie-parser");
let jwt = require("jsonwebtoken");

exports.regctrl=(req,res)=>{
    res.render("home.ejs");
}

exports.regctrl=(req,res)=>{
    res.render("register.ejs",{msg:null});
}

exports.saveReg=(req,res)=>{
    let{username,useremail,password,contact,type}=req.body;
   let result= regService.regServiceLogic(username,useremail,password,contact,type);
   result.then((r)=>{
    res.render("register.ejs",{msg:r});
   });
}

exports.regLogin=((req,res)=>{
    res.render("login.ejs",{msg:""});
});

exports.validateUser=((req,res)=>{
   let {username,password}=req.body;
   let result=regService.getOriginalPassword(username, password);
    result.then((user)=>{
        let bresult=bcrypt.compareSync(password,user.password);
       if(bresult)
        {
           const token=jwt.sign({
             id:user.rid,
             name:user.name
           },"1$23$45",{expiresIn:'1h'});
           res.cookie("token", token, { httpOnly: true });
            res.redirect("/dashboard"); 
       }
       else{
            res.render("login.ejs",{msg:"Invalid credential"});
       }
    });
    
});