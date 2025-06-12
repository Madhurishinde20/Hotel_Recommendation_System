let routes=require("express");
let regctrl=require("../controllers/regctrl.js");
let router=routes.Router();

router.get("/",(req,res)=>{
    res.render("home");
})

router.post("/register",regctrl.regctrl);

router.get("/",regctrl.homePage);
router.get("/signup",regctrl.signUpPage);
router.get("/signin",regctrl.signInPage);

module.exports=router;