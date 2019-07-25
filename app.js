// Section 4 - 41 - "Let" and "Const"
// TypeScript let's you use ES6 while generation other ES versions
// let creates a block variable
// var creates a global variable
console.log("================================================================================");
console.log("LET & CONST");
var variable = "Test";
console.log(variable);
variable = "Another value";
console.log(variable);
var maxLevels = 100;
console.log(maxLevels);
//maxLevels = 99; // doesn't work
// 42 Block Scope
function reset() {
    //console.log(variable); // undefined because was declared before the function block
    var variable = null;
    console.log(variable);
}
reset();
console.log(variable); // returns "Another value"
// 43 Arrow Functions
console.log("================================================================================");
console.log("ARROW FUNCTIONS");
var addNumbers = function (number1, number2) {
    return number1 + number2;
};
console.log(addNumbers(10, 3));
var multiplyNumbers = function (number1, number2) { return number1 * number2; };
console.log(multiplyNumbers(10, 3));
console.log("================================================================================");
console.log("ARROW FUNCTIONS - VARIATIONS");
// Arrow function without arguments
var greet = function () {
    console.log("Hello!");
};
greet();
// Shortest way possible - implies any type
var greetFriend = function (friend) { return console.log(friend); };
greetFriend("Amigo");
// 45 Functions and Default Parameters
console.log("================================================================================");
console.log("FUNCTIONS AND DEFAULT PARAMETERS");
var countdown = function (start) {
    if (start === void 0) { start = 10; }
    while (start > 0) {
        start--;
    }
    console.log("Done!", start);
};
countdown(20);
countdown();
// ES6 default parameter have some rules to be followed
// 46 The Spread Operator
console.log("================================================================================");
console.log("REST AND SPREAD");
// allow to work with arrays and lists
var numbers = [1, 10, 99, -5];
console.log(Math.max(33, 99, 10, -3)); // not an array, it's a list
//console.log(Math.max(numbers)); // compiler error - can't use number[] on function that expects number
console.log(Math.max.apply(Math, numbers)); // ... spread operator - spreads the array into single values
// allows to change arrays into lists without the use of complex loops
// 47 The Rest Operator
function makeArray(name) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return args; // would only fetch first value
}
console.log(makeArray("Gabriel", 1, 3, 5, 7, 9));
// Rest parameters must be last
// 48 Rest Parameters & Tuples
// Since TypeScript 3, you can also use tuples as types for rest expressions
// Functions are equivalent
function printInfo1(name, age) {
    console.log('My name is ' + name + ' and I am ' + age + ' years old!');
}
function printInfo2() {
    var info = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        info[_i] = arguments[_i];
    }
    console.log('My name is ' + info[0] + ' and I am ' + info[1] + ' years old!');
}
// 49 Destructuring Arrays
console.log("================================================================================");
console.log("DESTRUCTURING");
var myHobbies = ["Cooking", "Sports"];
//const hobby1 = myHobbies[0];
//const hobby2 = myHobbies[1];
//console.log(myHobbies[0], myHobbies[1]);
//console.log(hobby1, hobby2);
var hobby1 = myHobbies[0], hobby2 = myHobbies[1]; // like variable unpacking in Python
console.log(hobby1, hobby2);
// 50 Destructuring Objects
var userData = { userName: "Gabriel", age: 27 };
//const userName = userData.userName;
//const age = userData.age;
//console.log(userName, age);
var myName = userData.userName, myAge = userData.age; // should be the same names of the properties - can use different name for the variables using colons
// doesn't have to assign aliases
console.log(myName, myAge);
