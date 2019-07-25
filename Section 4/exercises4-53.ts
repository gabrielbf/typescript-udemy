console.log("================================================================================");
console.log("Exercise 1 - Arrow Function");
// Exercise 1 - Maybe use an Arrow Function?
//var double = function(value) {
//    return value * 2;
//};
//console.log(double(10));
var doubleNumber = (value: number): number => value * 2;
console.log(doubleNumber(5));

// Exercise 2 - If only we could provide some default values...
console.log("================================================================================");
console.log("Exercise 2 - Parameter default value");
var greet = function (name: string = "Max"): void {
    console.log("Hello, " + name);
};
greet();
greet("Anna");

// Exercise 3 - Isn't there a shorter way to get all these Values?
console.log("================================================================================");
console.log("Exercise 3 - Spread operator");
var numbers = [-3, 33, 38, 5];
//console.log(Math.min.apply(Math, numbers));
console.log(Math.min(...numbers));

// Exercise 4 - I have to think about Exercise 3 ...
console.log("================================================================================");
console.log("Exercise 4 - Spread operator");
var newArray = [55, 20];
//Array.prototype.push.apply(newArray, numbers);
//console.log(newArray);
newArray.push(...numbers);
console.log(newArray);
//console.log(...numbers, ...newArray);

// Exercise 5 - That's a well-constructed array.
console.log("================================================================================");
console.log("Exercise 5 - Destructuring Array");
var testResults = [3.89, 2.99, 1.38];
//var result1 = testResults[0];
//var result2 = testResults[1];
//var result3 = testResults[2];
var [result1, result2, result3] = testResults;
console.log(result1, result2, result3);

// Exercise 6 - And a well-constructed object!
console.log("================================================================================");
console.log("Exercise 6 - Destructuring Object");
var scientist: {firstName: string, experience: number}= {firstName: "Will", experience: 12};
//var firstName = scientist.firstName;
//var experience = scientist.experience;
var {firstName, experience} = scientist;
console.log(firstName, experience);
