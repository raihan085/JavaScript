// This is print function
console.log("Hello world")

// variable: let or var
let name = 'Raihan';
console.log(name);

// Cannot be a reserved keyword (if)
// Should be meaningful (a1,b2)
// Cannot start with a number (1name)
// Cannot contain a space or hyphen (-)
// Are case-sensitive
// Mordern best patrice


// consonant type

let interestRate = 0.3;
interestRate = 1;
console.log(interestRate);

/*
const interestRate2 = 0.4;
interestRate2 = 2;
console.log(interestRate2);
*/
// primitive Types/Value Types : String,Number,Boolean,Undefined,null

let name1 = 'Raihan'; // String Literal
let age = 22; // Number Literal
let isApproved = true; // Boolean Literal
let firstName; // Undefined Literal
let lastName = null; // null Literal

// Dynamic Languages : Static (Statically-typed), Dynamic (Dynamically-typed)

typeof name; // string
name = 2;
typeof name; // number


// Reference Types: Object,Array,Function

// Object
let person = {
  name: 'Raihan',
  age: 23
};

console.log(person)

// Dot Notation
person.name = 'Shahidul';

console.log(person.name);

// Bracket Notation
person['name'] = 'Raihan';

console.log(person.name);

// Array

let selectedColors = ['red','blue'];
console.log(selectedColors[0]);
selectedColors[2] = 'green';
console.log(selectedColors);
selectedColors[3] = 1;
console.log(selectedColors);
typeof selectedColors;

// Array Property
console.log(selectedColors.length);

// Function
function greet(firstName,lastName) {
  console.log('Hello ' + firstName +' ' + lastName);
};

greet('Shahidul','Raihan');
greet(0,85);

// Types of function

// Calculating a value

function square(number){
  return number * number;
};

let number = square(6);

console.log(number);
