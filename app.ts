// string
let myName: string = 'Gabriel';
//myName = 29;

// number
let myAge: number = 27; // can also be floating point number - TypeScript doesn't differ between them 
//myAge = 'Gabriel';

// boolean 
let hasHobbies: boolean = false;
//hasHobbies = 1; // gives error even though you can cast it

// assign types
//let myRealAge; // type any
let myRealAge: number; // explicit assinging type to variable
myRealAge = 27;
//myRealAge = '27'; // no error from tsc


// array
//let hobbies = ["Cooking", "Sports"]; // TypeScript infers this to be an array of strings

//can override this behavior with
let hobbies: any[] = ["Cooking", "Sports"]; // it is not an array of strings only anymore

//console.log(hobbies[0]);
//console.log(typeof hobbies);
hobbies = [100]; // TypeScript doesn't allow other types in this array
//hobbies = 100; // still gives error

// tuples - not on javascript
// arrays with mixed types and limited number of items
//let address = ["Superstreet", 99];

// if I'm certain the address array will have the same format always
let address: [string, number] = ["Superstreet", 99];
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
enum Color {
	Gray,
	Green = 100,
	Blue = 2
}
let myColor: Color = Color.Green; // console outputs 1
//console.log(myColor);

// any type - should be an exception
let car: any = "BMW";
//console.log(car);
car = { brand: "BMW", series: 3 };
//console.log(car);

// functions
function returnMyName(): string { // return value is string
	return myName;
}
//console.log(returnMyName());

// void
function sayHello(): void { // no returns should used
	console.log("Hello!");
	//return 1; // throws an error
}

// argument types
function multiply(value1: number, value2: number): number {
	return value1 * value2;
}
//console.log(multiply(2, 'Gabriel')); // NaN - Not a Number
//console.log(multiply(2, 2));

// 18 Functions as Types
// function types
// this will be a function type. it indicates that the variable will only receive functions with 2 numbers as parameters and returning a number. uses ES6 arrow syntax.
let myMultiply: (val1: number, val2: number) => number; 
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
let userData: { name: string, age: number } = { // after variable name, define types of the properties for this object
	name: "Gabriel",
	age: 27
};

// 20 Example: Putting it all together in a Complex Object
// complex object
let complex: {data: number[], output: (all: boolean) => number[]} = {
	data: [100, 3.99, 10],

	output: function (all: boolean): number[] {
		return this.data;
	}
};
//complex = {}; // does not satisfy the more complex type

// 21 Creating custom Types with Type Aliases
//let complex2: {data: number[], output: (all: boolean) => number[]} = {
//	data: [100, 3.99, 10],
//
//	output: function (all: boolean): number[] {
//		return this.data;
//	}
//};
// if I change the data type to say, any[], then I would have to change in two places
// type alias to store a type

// type alias
type Complex = {data: number[], output: (all: boolean) => number[]};
let complex2: Complex = {
	data: [100, 3.99, 10],

	output: function (all: boolean): number[] {
		return this.data;
	}
};

// 22 Allowing multiple Types with Union Types
//let myRealRealAge = 27 or "27"; // should use any
//let myRealRealAge: any = 27;
let myRealRealAge: number | string = 27;
myRealRealAge = "27";
//myRealRealAge = true; // doesn't work because the type for this variable is only string OR number
