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
