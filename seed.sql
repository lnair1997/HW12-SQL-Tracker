USE employee_DB;

INSERT INTO department (dept_name)
VALUES ("Marketing"), ("Research"), ("HR");

INSERT INTO roles (title, salary, department_id)
VALUES ("Marketing Lead", 150000,1),
("Marketing Technician", 80000,1),
("Lead Researcher", 150000, 2),
("Researcher", 100000,2),
("HR Manager", 120000, 3),
("HR Assistant", 80000, 3),
("Recruiter", 80000, 3);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Jane","Doe",1,1),
("Joe","Smith",2,2),
("Bob","Builder",3,3);
