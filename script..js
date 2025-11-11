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

    // Nested array
    skills: ["Communication", "Excel", "JS", "Teamwork"],

    // Nested numbers (monthly targets)
    monthlyTargets: [10, 12, 15, 14, 20],

    // Nested object
    address: {
        city: "Jaffna",
        country: "Sri Lanka",
        postalCode: 40000
    },

    // METHOD
    // modern method syntax
    yearlySalary() {
        return this.salary * 12;  
    }

};

// Dot notation
console.log(employee.name);  // Kaviya

// Display employee name
console.log("Employee:", employee.name);  

// Display keys
console.log("Keys:", Object.keys(employee));  

// Display values
console.log("Values:", Object.values(employee));  

// Display yearly salary using method
console.log("Yearly Salary (method):", employee.yearlySalary()); 

// Display yearly salary using property directly
console.log("Yearly Salary (manual):", employee.salary * 12);

// Display nested array
console.log("Skills:", employee.skills);
console.log("First Skill:", employee.skills[0]);

// Display nested numbers
console.log("Monthly Targets:", employee.monthlyTargets);
console.log("Target Month 2:", employee.monthlyTargets[1]);

// Display nested object values
console.log("City:", employee.address.city);
console.log("Postal Code:", employee.address.postalCode);


