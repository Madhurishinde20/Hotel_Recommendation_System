let app=require("./src/app.js");

let port=2000;
app.listen(port,(res,req)=>{
   console.log("Server started "  + port);
});