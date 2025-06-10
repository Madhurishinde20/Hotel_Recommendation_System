let express=require("express");

let bodyparser=require("body-parser");

let conn=require("./config/db.js");

let app=express();

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

app.set('view engine','ejs');
app.use(express.static("public"));

module.exports=app;
