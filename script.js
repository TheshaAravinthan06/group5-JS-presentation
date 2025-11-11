// object
//  object constructor syntax
const objName= new Object()
// object literal syntax
const objname2= {}

const employee = {
    // keys: values
    name: "Kaviya",
    role: "manager",
    salary: 100000,
    isAlive: true,


    // // METHOD
    // yearlySalary() {
    //     return this.salary * 12;  // return value instead of console.log inside method
    }

// Dot notation
console.log(employee.name);  // Kaviya

// Display employee name
console.log("Employee:", employee.name);  // Employee: Kaviya

// Display keys
console.log("Keys:", Object.keys(employee));  // Keys: ["name","role","salary","isAlive","yearlySalary"]

// Display values
console.log("Values:", Object.values(employee));  // Values: ["Kaviya","manager",100000,true,f()]

// // Display yearly salary
// console.log("Yearly Salary:", employee.yearlySalary());  // Yearly Salary: 1200000

 // // Display yearly salary
console.log("Yearly Salary:", employee.salary*12)