// string
var myName = 'Gabriel';
//myName = 29;
// number
var myAge = 27; // can also be floating point number - TypeScript doesn't differ between them 
//myAge = 'Gabriel';
// boolean 
var hasHobbies = false;
//hasHobbies = 1; // gives error even though you can cast it
// assign types
//let myRealAge; // type any
var myRealAge; // explicit assinging type to variable
myRealAge = 27;
//myRealAge = '27'; // no error from tsc
// array
//let hobbies = ["Cooking", "Sports"]; // TypeScript infers this to be an array of strings
//can override this behavior with
var hobbies = ["Cooking", "Sports"]; // it is not an array of strings only anymore
//console.log(hobbies[0]);
//console.log(typeof hobbies);
hobbies = [100]; // TypeScript doesn't allow other types in this array
//hobbies = 100; // still gives error
// tuples - not on javascript
// arrays with mixed types and limited number of items
//let address = ["Superstreet", 99];
// if I'm certain the address array will have the same format always
var address = ["Superstreet", 99];
//let address: [string, number] = [99, "Superstreet"]; // order is important!
// enums - number more expressive
// Creates nem type to be used later
// Numbers are assigned automatically
//enum Color {
//	Gray, // 0
//	Green, // 1
//	Blue // 2
//}
// to set numbers - if numbers not set, increments last number
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var myColor = Color.Green; // console outputs 1
//console.log(myColor);
// any type - should be an exception
var car = "BMW";
//console.log(car);
car = { brand: "BMW", series: 3 };
//console.log(car);
// functions
function returnMyName() {
    return myName;
}
//console.log(returnMyName());
// void
function sayHello() {
    console.log("Hello!");
    //return 1; // throws an error
}
// argument types
function multiply(value1, value2) {
    return value1 * value2;
}
//console.log(multiply(2, 'Gabriel')); // NaN - Not a Number
//console.log(multiply(2, 2));
// 18 Functions as Types
// function types
// this will be a function type. it indicates that the variable will only receive functions with 2 numbers as parameters and returning a number. uses ES6 arrow syntax.
var myMultiply;
//myMultiply = sayHello;
//myMultiply();
myMultiply = multiply;
//console.log(myMultiply(5, 2));
// 19 Objects and Types
// objects
//let userData = { // typescript infers userData to be and object with one string property and one number property
//	name: "Gabriel",
//	age: 27
//};
//userData = {}; // will give an error the names of the properties are important too
//userData = {
//	a: "Hello",
//	b: 22
//}; // property names are important
var userData = {
    name: "Gabriel",
    age: 27
};
// 20 Example: Putting it all together in a Complex Object
// complex object
var complex = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
var complex2 = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
// 22 Allowing multiple Types with Union Types
//let myRealRealAge = 27 or "27"; // should use any
//let myRealRealAge: any = 27;
var myRealRealAge = 27;
myRealRealAge = "27";
//myRealRealAge = true; // doesn't work because the type for this variable is only string OR number
// 23 Checking for Types during Runtime
// check types
var finalValue = "A string";
//if (typeof finalValue == string) // doesn't work
if (typeof finalValue == "number") {
    console.log("final value is a number");
}
// The "never" Type (added with TypeScript 2.0)
// never type
function neverReturns() {
    throw new Error('An error!');
}
// 25 Nullable Types (added with TypeScript 2.0)
// Nullable types
//let canBeNull = 12;
//canBeNull = null; // com strictNullChecks this won't work
var canAlsoBeNull; // undefined and of type any
canAlsoBeNull = null;
// can put strictNullChecks in tsconfig.json to be explicit about what can be null and what should never be null
var canBeNull = 12;
canBeNull = null;
var canThisBeAny = null; // infered to be of type null!
//canThisBeAny = 12; // won't work 
