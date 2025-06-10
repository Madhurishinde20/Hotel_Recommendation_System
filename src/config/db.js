let mysql=require("mysql");
 let conn=mysql.createConnection({
      host:"localhost",
      user:"root",
      password:"Madhuri@20",
      database:"Hotel_management_System"
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