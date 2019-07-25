// Section 4 - 41 - "Let" and "Const"
// TypeScript let's you use ES6 while generation other ES versions
// let creates a block variable
// var creates a global variable
console.log("================================================================================");
console.log("LET & CONST");
let variable = "Test";
console.log(variable);
variable = "Another value";
console.log(variable);

const maxLevels = 100;
console.log(maxLevels);
//maxLevels = 99; // doesn't work

// 42 Block Scope
function reset() {
	//console.log(variable); // undefined because was declared before the function block
	let variable = null;
	console.log(variable);
}
reset();
console.log(variable); // returns "Another value"

// 43 Arrow Functions
console.log("================================================================================");
console.log("ARROW FUNCTIONS");
const addNumbers = function(number1: number, number2: number): number {
	return number1 + number2;
};
console.log(addNumbers(10, 3));

const multiplyNumbers = (number1: number, number2: number) => number1 * number2;
console.log(multiplyNumbers(10, 3));

console.log("================================================================================");
console.log("ARROW FUNCTIONS - VARIATIONS");

// Arrow function without arguments
const greet = () => {
	console.log("Hello!");
}
greet();

// Shortest way possible - implies any type
const greetFriend = friend => console.log(friend);
greetFriend("Amigo");

// 45 Functions and Default Parameters
console.log("================================================================================");
console.log("FUNCTIONS AND DEFAULT PARAMETERS");

const countdown = (start: number = 10): void => { // start has default value set to 10
	while (start > 0) {
		start--;
	}
	console.log("Done!", start);
}
countdown(20);
countdown();
// ES6 default parameter have some rules to be followed

// 46 The Spread Operator
console.log("================================================================================");
console.log("REST AND SPREAD");
// allow to work with arrays and lists
const numbers = [1, 10, 99, -5];
console.log(Math.max(33, 99, 10, -3)); // not an array, it's a list
//console.log(Math.max(numbers)); // compiler error - can't use number[] on function that expects number
console.log(Math.max(...numbers)); // ... spread operator - spreads the array into single values
// allows to change arrays into lists without the use of complex loops

// 47 The Rest Operator
function makeArray(name: string, ...args: number[]) { // rest operator - one or more of the type
	return args; // would only fetch first value
}
console.log(makeArray("Gabriel", 1, 3, 5, 7, 9));
// Rest parameters must be last

// 48 Rest Parameters & Tuples
// Since TypeScript 3, you can also use tuples as types for rest expressions
// Functions are equivalent
function printInfo1(name: string, age: number) {
	console.log('My name is ' + name + ' and I am ' + age + ' years old!');
}

function printInfo2(...info: [string, number]) {
	console.log('My name is ' + info[0] + ' and I am ' + info[1] + ' years old!');
}

// 49 Destructuring Arrays
console.log("================================================================================");
console.log("DESTRUCTURING");
const myHobbies = ["Cooking", "Sports"];
//const hobby1 = myHobbies[0];
//const hobby2 = myHobbies[1];
//console.log(myHobbies[0], myHobbies[1]);
//console.log(hobby1, hobby2);
const [hobby1, hobby2] = myHobbies; // like variable unpacking in Python
console.log(hobby1, hobby2);

// 50 Destructuring Objects
const userData = {userName: "Gabriel", age: 27};
//const userName = userData.userName;
//const age = userData.age;
//console.log(userName, age);
const {userName: myName, age: myAge} = userData; // should be the same names of the properties - can use different name for the variables using colons
// doesn't have to assign aliases
console.log(myName, myAge);

// 51 Template Literals
console.log("================================================================================");
console.log("TEMPLATE LITERALS");
// extended string, with more features - kind of
// uses ` back tick
const userName = "Gabriel";
const greeting = "Hello, I'm " + userName;
const greetingsLiteral = `This is a heading!
Down here too! ${userName}! `; // ${} prints the value of variable inside string. Like f-strings in Python
console.log(greetingsLiteral);

// 52 Other ES6 Features - Symbols, Iterators and Generators
console.log("================================================================================");
console.log("OTHER FEATURES");
