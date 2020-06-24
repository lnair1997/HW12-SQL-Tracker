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
      case "View All Departments":
        viewAllDepartments();
        break;
      case "View All Roles":
        viewAllRoles();
        break;
      case "View All Employees":
        viewAllEmployees();
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
    connection.query(query, { department_name: `${answer.departmentAdd}` }, function (err, res) {
      if (err) throw (err);
      start();
    });
  });
};

function addRole() {
  connection.query(`SELECT * FROM department`, function (err, res) {
    if (err) throw err;
    console.table(res);

    inquirer.prompt([{
      type: "list",
      name: "addDepart",
      choices: function () {
        var departArray = [];
        for (var i = 0; i < res.length; i++) {
          departArray.push(res[i].id);
        }
        return departArray;
      },
      message: "What department does this role belong to?",
    },
    {
      type: "input",
      name: "roleAdd",
      message: "What name do you want for this role?",
    },
    {
      type: "input",
      name: "salaryAdd",
      message: "What is the salary?",
    },
    ]).then(function (answer) {
      var query = "INSERT INTO role SET ?";
      connection.query(query,{role_title: `${answer.addRole}`, salary: `${answer.addSalary}`, department_id: `${answer.addDepart}`}, function (err, results) {
          if (err) throw err;
          console.log("New Role has been added!");
          start();
        }
      );
    })
  });
};


function addEmployee() {
  inquirer.prompt({
    type: "input",
    name: "departmentAdd",
    message: "What is the name of the new Department?"
  }).then(function (answer) {
    var query = "INSERT INTO department SET ?";
    connection.query(query, { department_name: `${answer.departmentAdd}` }, function (err, res) {
      if (err) throw (err);
      runSearch();
    });
  });
};

function viewAllDepartments() {
  connection.query("SELECT * FROM department", function(err, res) {
    console.table(res);
    start();
  });
};

function viewAllRoles() {
  connection.query("SELECT * FROM roles", function(err, res) {
    console.table(res);
    start();
  });
};

function viewAllEmployees() {
  connection.query("SELECT * FROM employees", function (err, res) {
    console.table(res);
    start();
  });
};

function updateRole() {
  inquirer.prompt({
    type: "input",
    name: "departmentAdd",
    message: "What is the name of the new Department?"
  }).then(function (answer) {
    var query = "INSERT INTO department SET ?";
    connection.query(query, { department_name: `${answer.departmentAdd}` }, function (err, res) {
      if (err) throw (err);
      runSearch();
    });
  });
};