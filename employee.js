const mysql = require("mysql");
const inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "C00lp3rs0n!@",
  database: "employee_DB"
});

connection.connect(function (err) {
  if (err) throw err;

  console.log("connection id", connection.threadId);
  start();
});

function start() {
  inquirer.prompt({
    type: "rawlist",
    name: "start",
    message: "What would you like to do?",
    choices: [
      "View All Departments",
      "View All Roles",
      "View All Employee's",
      "Add Department",
      "Add Role",
      "Add Employee",
      "Update Employee Role",
      "Exit"
    ]
  }).then(function (answer) {
    switch (answer.start) {
      case "View All Departments":
        viewAllDepartments();
        break;
      case "View All Roles":
        viewAllRoles();
        break;
      case "View All Employee's":
        viewAllEmployees();
        break;
      case "Add Department":
        addDepartment();
        break;
      case "Add Role":
        addRole();
        break;
      case "Add Employee":
        addEmployee();
        break;
      case "Update Employee Role":
        updateRole();
        break;
      case "Exit":
        connection.end();
        break;
    };
  });
};

function viewAllDepartments() {
  connection.query("SELECT * FROM department", function (err, res) {
    console.table(res);
    start();
  });
};

function viewAllRoles() {
  connection.query(`SELECT * FROM roles`, function (err, res) {
    console.table(res);
    start();
  });
};

function viewAllEmployees() {
  connection.query(`SELECT * FROM employees`, function (err, res) {
    console.table(res);
    start();
  });
};

function addDepartment() {
  inquirer.prompt({
    type: "input",
    name: "departmentAdd",
    message: "What is the name of the new Department?"
  }).then(function (answer) {
    let query = "INSERT INTO department SET ?";
    connection.query(query, { dept_name: `${answer.departmentAdd}` }, function (err, res) {
      if (err) throw err;
      console.log("New Department has been added!");
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
      message: "What department does this role belong to?",
      choices: function () {
        let departArray = [];
        for (var i = 0; i < res.length; i++) {
          departArray.push(res[i].id);
        }
        return departArray;
      }
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
      let query = "INSERT INTO roles SET ?";
      connection.query(query, { title: `${answer.roleAdd}`, salary: `${answer.salaryAdd}`, department_id: `${answer.addDepart}` }, function (err, results) {
        if (err) throw err;
        console.log("New Role has been added!");
        start();
      });
    });
  });
};

function addEmployee() {
    inquirer.prompt([{
      type: "input",
      name: "firstname",
      message: "What is the employee's first name?",
    },
    {
      type: "input",
      name: "lastname",
      message: "What is the employee's last name?"
    },
    {
      type: "list",
      name: "roleId",
      message: "What role will this employee fill?",
      choices: [1, 2, 3, 4, 5]
    }]).then(function (answer) {
      let query = "INSERT INTO employees SET ?";
      connection.query(query, { first_name: `${answer.firstname}`, last_name: `${answer.lastname}`, role_id: `${answer.roleId}` }, function (err, res) {
        if (err) throw err;
        console.log("New Employee has been added!");
        start();
      });
    })
  };

  function updateRole() {
    connection.query("SELECT id, first_name, last_name, role_id FROM employees", function (err, res) {
      if (err) throw err

      let listEmployee = [];
      for (i = 0; i < res.length; i++) {
        var employee = {
            name: `${employeeList[i].first_name} ${employeeList[i].last_name}, Current Role Id: ${employeeList[i].role_id} `,
            value: {
                id: `${employeeList[i].id}`,
                first_name: `${employeeList[i].first_name}`,
                last_name: `${employeeList[i].last_name}`,
                role_id: `${employeeList[i].role_id}`
            }
        }
        listAll.push(employee)
    }
  });
};