import { Request } from "./requests";

// Select Elements
const form = document.getElementById("employee-form");
const nameInput = document.getElementById("name");
const departmentInput = document.getElementById("department");
const salaryInput = document.getElementById("salary");
const employeesList = document.getElementById("employees");
const updateEmployeeButton = document.getElementById("update");

const request = new Request("http://localhost:3000/employees");

// request.get()
//     .then(employees => console.log(employees))
//     .catch(err => console.log(err));

// request.post({ name: "Peter Parker", department: "photo", salary: 6000 })
//     .then(employee => console.log(employee))
//     .catch(err => console.log(err));

// request.put(1, { name: "Peter Parker", department: "photo", salary: 6000 })
//     .then(employee => console.log(employee))
//     .catch(err => console.log(err));

request.delete(2)
    .then(message => console.log(message))
    .catch(err => console.log(err));