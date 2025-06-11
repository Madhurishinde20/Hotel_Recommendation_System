let mysql=require("mysql2");
 let conn=mysql.createConnection({
      host:"localhost",
      user:"root",
<<<<<<< HEAD
      password:"root",
      database:"hotel"
=======
      password:"Madhuri@20",
      database:"Hotel_Recommendation_System"
>>>>>>> e0037d5c83e1c7c9e75700fea570cbe2337059a3
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