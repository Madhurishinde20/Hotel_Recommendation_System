let express = require("express");
let routes=require("express");

let controller=require("../controller/regctrl.js");
let router=routes.Router();

router.get("/",(req,res)=>{
    res.render("home");
})

router.get("/reg",controller.regctrl);
router.post("/savereg",controller.saveReg);
router.get("/login",controller.regLogin);
router.get("/signin", controller.regLogin);
router.get("/signup", controller.regctrl);

router.post("/validate",controller.validateUser);


module.exports=router;