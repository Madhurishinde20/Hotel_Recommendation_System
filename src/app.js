let express=require("express");
let bodyParser=require("body-parser");
let cookieParser=require("cookie-parser");
let router=require("../src/routes/userRoutes.js");

let conn=require("./config/db.js");
let app=express();

app.set('view engine','ejs');
app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use("/", router);
app.use("/",require("./routes/userRoutes"));

module.exports=app;
