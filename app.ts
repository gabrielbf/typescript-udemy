// Section 8: Generics
// 93 Why and What

// Simple Generic
//function echo(data: any) { // kind of generic since it's using any type
//	return data;
//}
//
//console.log(echo("Gabriel"));
//console.log(echo("Gabriel").length);
//console.log(echo(27));
//console.log(echo(27).length);
//console.log(echo({name: "Gabriel", age: 27}).length);
// we don't know what type the return value is


// 94 Creating a Generic Function
//function echo(data: any) { // kind of generic since it's using any type
//	return data;
//}
//
//console.log(echo("Gabriel"));
//console.log(echo(27));
//console.log(echo({name: "Gabriel", age: 27}));

// Better Generic
function betterEcho<T>(data: T) {
	return data
}

console.log(betterEcho("Gabriel").length);
//console.log(betterEcho<number>("27").length); // doesn't work - says it's using number but passes string
console.log(betterEcho<string>("27").length); // doesn't work - says it's using number but passes string
console.log(betterEcho({name: "Gabriel", age: 27}));

// 95 A built-in Generic Type: Arrays
const testResults: Array<number> = [1.94, 2.33];
testResults.push(-2.99);
//testResults.push("string"); // compiler throws error
console.log(testResults); 

// 96 Generic Types and Arrays
function printAll<T>(args: T[]) {
	args.forEach((element) => console.log(element) ); // TypeScript knows it'll be an array because args: T[]
}

printAll<string>(["Pen", "Pineapple", "Apple", "Pen"]);


// 97 Using Generic Types
const echo2: <T>(data: T) => T = betterEcho;
// new constant receiving a type - everything after the colon and before the equals
// <T> generics setup
// function that receives data of type T and returs something of type T
// the echo2 constant receives the function betterEcho
console.log(echo2<string>("Something"));

// 98 Creating a Generic Class
class SimpleMath<T> {
	baseValue: T;
	multiplyValue: T;
	calculte(): number {
		return +this.baseValue * +this.multiplyValue; // +var explicitly casts the values to numbers. TypeScript knew that there could be value types in calculate that couldn't be multiplied
	}
}

const simpleMath = new SimpleMath();
simpleMath.baseValue = 10;
//simpleMath.baseValue = "something"; // results in NaN - can't multiply a number with a string
simpleMath.multiplyValue = 20;
console.log(simpleMath.calculte());
// "something" still gives and error
