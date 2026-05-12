let text = "Hello World";
console.log(text);

let name = 'Ali';
let age = 20;
let isPresent = true;
let score = null;
let address;
let skills = ['HTML', 'CSS'];
let student = { name: 'Ali', age: 20 };

console.log(typeof age);
console.log(typeof name);
console.log(typeof isPresent);
console.log(typeof score);
console.log(typeof address);
console.log(typeof skills);
console.log(typeof student);

// Get HTML elements
const heading = document.getElementById('heading');
const messagePara = document.getElementById('message');
const startBtn = document.getElementById('startBtn');

// Button event
startBtn.addEventListener('click', function () {
    heading.innerHTML = 'Button clicked!';
    messagePara.innerHTML = 'Your JavaScript is connected successfully.';
});