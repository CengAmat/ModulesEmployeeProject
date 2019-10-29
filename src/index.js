import { Request } from "./requests";
import { UI } from "./ui";

// Select Elements
const form = document.getElementById("employee-form");
const nameInput = document.getElementById("name");
const departmentInput = document.getElementById("department");
const salaryInput = document.getElementById("salary");
const employeesList = document.getElementById("employees");
const updateEmployeeButton = document.getElementById("update");

const request = new Request("http://localhost:3000/employees");
const ui = new UI();

eventListeners();

function eventListeners() {
    document.addEventListener("DOMContentLoaded", getAllEmployees);
    form.addEventListener("submit", addEmployee);
    employeesList.addEventListener("click", UpdateOrDelete);
}

function getAllEmployees() {
    request.get()
        .then(employees => {
            ui.addAllEmployeeToUI(employees)
        })
        .catch(err => console.log(err));
}

function addEmployee(e) {
    const employeeName = nameInput.value.trim();
    const employeeDepartment = departmentInput.value.trim();
    const employeeSalary = salaryInput.value.trim();

    if (employeeName === "" || employeeDepartment === "" || employeeSalary === "") {
        alert("Fill all fields...")
    }
    else {
        request.post({ name: employeeName, department: employeeDepartment, salary: Number(employeeSalary) })
            .then(employee => {
                ui.addEmployeeToUI(employee)
            })
            .catch(err => console.log(err))
    }
    ui.clearInputs();
    e.preventDefault();
}

function UpdateOrDelete(e) {
    if (e.target.id === "delete-employee") {
        // Delete
        deleteEmployee(e.target);
    }
    else if (e.target.id === "update-employee") {
        // Update
    }
}

function deleteEmployee(targetEmployee) {
    const id = targetEmployee.parentElement.previousElementSibling.previousElementSibling.textContent;
    request.delete(id)
        .then((message => {
            ui.deleteEmployeefromUI(targetEmployee.parentElement.parentElement);
        }))
        .catch(err => console.log(err))
}




// request.put(1, { name: "Peter Parker", department: "photo", salary: 6000 })
//     .then(employee => console.log(employee))
//     .catch(err => console.log(err));

// request.delete(2)
//     .then(message => console.log(message))
//     .catch(err => console.log(err));