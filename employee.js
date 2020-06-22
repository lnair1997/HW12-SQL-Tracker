const mysql = require("mysql2/promise");
const inquirer = require("inquirer");
// const cTbl = require("console.table");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "employee_db"
});

connection.connect(function (err) {
  if (err) throw err;

  start();
});


function start() {
  inquirer.prompt({
    type: "list",
    name: "startList",
    message: "What would you like to do?",
    choices: [
      "View All",
      "View Employees",
      "View Roles",
      "View Departments",
      "Add employee",
      "Remove employee",
      "Update employee",
      "Update employee role",
      "Add department",
      "Remove department",
      "Update department",
      "Add role",
      "Remove role",
      "Update role",
      "Exit"
    ]
  }).then(function (answer) {
      switch (answer.startList) {
        case "Find songs by artist":
          artistSearch();
          break;

        case "Find all artists who appear more than once":
          multiSearch();
          break;

        case "Find data within a specific range":
          rangeSearch();
          break;

        case "Search for a specific song":
          songSearch();
          break;

        case "exit":
          connection.end();
          break;
      }
    });
}