let express=require("express");

let bodyparser=require("body-parser");

let cookieParser=require("cookie-parser");

let conn=require("./config/db.js");

let session=require("express-session");

let router = require("./routes/userRouter");

let app=express();

app.set('view engine','ejs');
app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use(cookieParser());

app.use(session({
    secret: "1$23$45",
    resave: false,
    saveUninitialized: true
}));
app.use("/", router);

module.exports=app;
