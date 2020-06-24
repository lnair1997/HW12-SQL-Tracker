const mysql = require("mysql");
const inquirer = require("inquirer");
// const cTbl = require("console.table");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "C00lp3rs0n!@",
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
      "Add Department",
      "Add Role",
      "Add Employee",
      "View Departments",
      "View Roles",
      "View Employees",
      "Update Employee Role",
      "Update Manager",
      "View Employee By Manager",
      "Delete Department",
      "Delete Role",
      "Delete Employee",
      "View Budget for Each Department",
      "Exit"
    ]
  }).then(function (answer) {
    switch (answer.startList) {
      case "Add Department":
        addDepartment();
        break;
      case "Add Role":
        addRole();
        break;
      case "Add Employee":
        addEmployee();
        break;
      case "View Departments":
        viewDepartments();
        break;
      case "View Roles":
        viewRoles();
        break;
      case "View Employees":
        viewEmployees();
        break;
      case "Update Employee Role":
        updateRole();
        break;
      case "Update Manager":
        // updateManager();
        break;
      case "View Employee By Manager":
        // viewEmployeeByManager()
        break;
      case "Delete Department":
        // deleteDepartment();
        break;
      case "Delete Role":
        // deleteRole();
        break;
      case "Delete Employee":
        // deleteEmployee();
        break;
      case "View Budget for Each Department":
        // viewBudget();
        break;
    };
  });
};

function addDepartment() {
  inquirer.prompt({
    type: "input",
    name: "departmentAdd",
    message: "What is the name of the new Department?"
  }).then(function (answer) {
    var query = "INSERT INTO department SET ?";
    connection.query(query, {department_name: `${answer.departmentAdd}`}, function (err, res) {
      if (err) throw (err);
      start();
    });
  });
};

function addRole() {
  inquirer.prompt({
    type: "input",
    name: "departmentAdd",
    message: "What is the name of the new Department?"
  }).then(function (answer) {
    var query = "INSERT INTO department SET ?";
    connection.query(query, {department_name: `${answer.departmentAdd}`}, function (err, res) {
      if (err) throw (err);
      runSearch();
    });
  });
};

function addEmployee() {
  inquirer.prompt({
    type: "input",
    name: "departmentAdd",
    message: "What is the name of the new Department?"
  }).then(function (answer) {
    var query = "INSERT INTO department SET ?";
    connection.query(query, {department_name: `${answer.departmentAdd}`}, function (err, res) {
      if (err) throw (err);
      runSearch();
    });
  });
};

function viewDepartments() {
  inquirer.prompt({
    type: "input",
    name: "departmentAdd",
    message: "What is the name of the new Department?"
  }).then(function (answer) {
    var query = "INSERT INTO department SET ?";
    connection.query(query, {department_name: `${answer.departmentAdd}`}, function (err, res) {
      if (err) throw (err);
      runSearch();
    });
  });
};

function viewRoles() {
  inquirer.prompt({
    type: "input",
    name: "departmentAdd",
    message: "What is the name of the new Department?"
  }).then(function (answer) {
    var query = "INSERT INTO department SET ?";
    connection.query(query, {department_name: `${answer.departmentAdd}`}, function (err, res) {
      if (err) throw (err);
      runSearch();
    });
  });
};

function viewEmployees() {
  inquirer.prompt({
    type: "input",
    name: "departmentAdd",
    message: "What is the name of the new Department?"
  }).then(function (answer) {
    var query = "INSERT INTO department SET ?";
    connection.query(query, {department_name: `${answer.departmentAdd}`}, function (err, res) {
      if (err) throw (err);
      runSearch();
    });
  });
};

function updateRole() {
  inquirer.prompt({
    type: "input",
    name: "departmentAdd",
    message: "What is the name of the new Department?"
  }).then(function (answer) {
    var query = "INSERT INTO department SET ?";
    connection.query(query, {department_name: `${answer.departmentAdd}`}, function (err, res) {
      if (err) throw (err);
      runSearch();
    });
  });
};