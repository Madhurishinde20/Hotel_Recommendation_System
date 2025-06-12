let conn = require("../config/db.js");

exports.saveRegData = (...regData) => {
  return new Promise((resolve, reject) => {
    conn.query("INSERT INTO usermaster VALUES ( ?, ?, ?, ?, ?)", [regData[0], regData[1], regData[2], regData[3], regData[4]], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve("success");
      }
    });
  });
};

exports.getPasswordFromDB=(username)=>{
    return new Promise((resolve, reject) => {
        db.query("select userid,password,username from usermaster where username=?",
            [username],(err,result)=>{
                    if(err){
                        reject(err);
                    }
                    else if(result.length===0){
                        resolve(null);
                    }
                    else {
                        let user=result[0];
                        resolve(user);
                    }
            });
  });
}


/*exports.validateUserFromDB = (...userCred) => {
  return new Promise((resolve, reject) => {
    conn.query("SELECT * FROM usermaster WHERE username = ? AND password = ?", [...userCred], (err, result) => {
      if (err) {
        reject(err);
      } else {
        console.log(result);
        resolve(result);
      }
    });
  });
};

exports.getLoginUserProfile = (loginUserId) => {
  return new Promise((resolve, reject) => {
    conn.query("SELECT * FROM usermaster WHERE userid = ?", [loginUserId], (err, result) => {
      if (err) {
        reject(err);
      } else {
        console.log(result);
        resolve(result);
      }
    });
  });
};

exports.getUpdateUserProfile = (userId, updatedData) => {
  return new Promise((resolve, reject) => {
    conn.query("UPDATE usermaster SET ? WHERE userid = ?", [updatedData, userId], (err, result) => {
      if (err) {
        reject(err);
      } else {
        console.log("User profile updated successfully:", result);
        resolve(result);
      }
    });
  });
};
*/