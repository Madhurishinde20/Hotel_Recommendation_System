let express = require("express");
let router=express.Router();

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

// Admin Dashboard Sections
router.get("/admin", controller.adminDashboard); 

module.exports=router;