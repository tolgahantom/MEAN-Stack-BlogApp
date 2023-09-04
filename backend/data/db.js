const mysql = require("mysql2");
const config = require("../config.js");

let connection = mysql.createConnection(config.db);

connection.connect((err) => {
  if (err) {
    return console.log(err);
  }
  console.log("SQL Server Connected");
});

module.exports = connection.promise();
