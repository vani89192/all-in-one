// ------------------------------
// 1. Template Literals
// ------------------------------
function greet(name) {
    return `Hello, ${name}! Welcome to Masai School.`;
}
console.log(greet("Alice"));


// ------------------------------
// 2. Arrow Function – add two numbers
// ------------------------------
const add = (a, b) => a + b;
console.log(add(5, 7));


// ------------------------------
// 3. Rest & Spread Operators
// ------------------------------
function sumAll(...nums) {
    return nums.reduce((acc, val) => acc + val, 0);
}
console.log(sumAll(1, 2, 3, 4));


// ------------------------------
// 4. Multi-level Destructuring (name, city, pin only)
// ------------------------------
const user = {
    name: "Alice",
    age: 22,
    address: {
        city: "Bangalore",
        pin: 560001
    }
};

const { name, address: { city, pin } } = user;

console.log(name);
console.log(city);
console.log(pin);


// ------------------------------
// 5. Ternary Operator (Check voting eligibility)
// ------------------------------
function checkAge(age) {
    return age >= 18 ? "Eligible to Vote" : "Not Eligible";
}
console.log(checkAge(20));
console.log(checkAge(16));


// ------------------------------
// 6. Default Parameters
// ------------------------------
function welcomeMessage(name = "Guest") {
    return `Welcome, ${name}!`;
}
console.log(welcomeMessage("Srivani"));
console.log(welcomeMessage());


// ------------------------------
// 7. For...of Loop
// ------------------------------
const fruits = ["apple", "banana", "mango"];
for (let item of fruits) {
    console.log(item);
}


// ------------------------------
// 8. forEach()
// ------------------------------
const numbers = [10, 20, 30];
numbers.forEach(num => console.log(num * 2));


// ------------------------------
// 9. map() – return squares
// ------------------------------
const values = [2, 4, 6];
const squares = values.map(v => v * v);
console.log(squares);


// ------------------------------
// 10. filter() – marks greater than 70
// ------------------------------
const students = [
    { name: "Alice", marks: 58 },
    { name: "Bob", marks: 85 },
    { name: "Charlie", marks: 72 },
    { name: "David", marks: 90 }
];

const filteredStudents = students.filter(st => st.marks > 70);
console.log(filteredStudents);


// ------------------------------
// 11. sort() – sort descending by marks
// ------------------------------
const sortedStudents = [...students].sort((a, b) => b.marks - a.marks);
console.log(sortedStudents);


// ------------------------------
// 12. Combined Question – filter + sort + extract names
// ------------------------------
function processStudents(students) {
    let filtered = students.filter(student => student.marks > 70);
    filtered.sort((a, b) => b.marks - a.marks);
    let names = filtered.map(student => student.name);
    return names;
}

console.log(processStudents(students));
