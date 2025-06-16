let express = require("express");
let router=express.Router();
let multer = require("multer");
let path = require("path");
let controller=require("../controller/regctrl.js");


router.get("/",(req,res)=>{
    res.render("home");
})

router.get("/reg",controller.regCtrl);
router.post("/savereg",controller.saveReg);
router.get("/login",controller.regLogin);
router.get("/signin", controller.regLogin);
router.get("/signup", controller.regCtrl);

router.post("/validate",controller.validateUser);

router.get("/admin", controller.adminDashboard);

router.get("/city",controller.Citypage);
router.post("/savecity",controller.SaveCity);

module.exports=router;