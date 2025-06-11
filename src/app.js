let express=require("express");
let bodyparser=require("body-parser");
let cookieParser=require("cookie-parser");
let router=require("../src/routes/userRoutes.js");

let conn=require("./config/db.js");
let app=express();

app.set('view engine','ejs');
app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use(cookieParser());
app.use("/", router);

module.exports=app;
