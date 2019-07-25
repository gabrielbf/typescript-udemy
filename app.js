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
console.log(Math.max.apply(Math, numbers));
