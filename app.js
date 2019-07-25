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
