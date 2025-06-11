let mysql=require("mysql2");
 let conn=mysql.createConnection({
      host:"localhost",
      user:"root",
      password:"root",
      database:"hotel"
 });
 conn.connect((err)=>{
     if(err){
        console.log("Database not connected");
     }
     else{
        console.log("Database is Connected");
     }
 });
 module.exports=conn;
 //new change