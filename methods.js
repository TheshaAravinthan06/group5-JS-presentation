 // METHOD
    // modern method syntax
    yearlySalary() {
        return this.salary * 12;  
    }

    // traditional syntax(older style js)
    yearlySalary: function() {
    return this.salary * 12;
}


const student = {
  name: "Kaviya",
  
  greet() {
    console.log("Hello! My name is " + this.name);
  }
};

student.greet();  // Output: Hello! My name is Kaviya

const account = {
  balance: 1000,

  deposit(amount) {
    this.balance += amount;
  }
};

account.deposit(500);
console.log(account.balance); // 1500

const user = {
  skills: ["HTML", "CSS"],

  addSkill(skill) {
    this.skills.push(skill);
  }
};

user.addSkill("JavaScript");
console.log(user.skills); // ["HTML", "CSS", "JavaScript"]


const person = {
  name: "Arun",
  contact: {
    phone: "0771234567",

    showPhone() {
      console.log("Phone:", this.phone);
    }
  }
};

person.contact.showPhone(); // Phone: 0771234567

const employee2 = {
  name: "Nisha",
  role: "Developer",

// This is a template literal: ${} allows us to insert values dynamically.
// backticks `
// 
  info() {
    return `${this.name} works as a ${this.role}`;
  }
};

console.log(employee2.info()); // Nisha works as a Developer


