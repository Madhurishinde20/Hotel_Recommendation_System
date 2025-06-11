let express=require("express");

let bodyparser=require("body-parser");

let cookieParser=require("cookie-parser");

let conn=require("./config/db.js");

let app=express();

app.use(express.urlencoded({extended:true}));
app.use(bodyparser.json());

app.set('view engine','ejs');
app.use(express.static("public"));

app.use(cookieParser);
app.use("/",router);

module.exports=app;
