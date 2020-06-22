const mysql = require("mysql2/promise");
const inquirer = require("inquirer");
const cTbl = require("console.table");

var connection = mysql.createConnection({
    host: "localhost",
 
    port: 3306,

    user: "root",
  
    password: "",
    database: ""
  });
  
  connection.connect(function(err) {
    if (err) throw err;
    
    start();
  });