// Section 4 - 41 - "Let" and "Const"
// TypeScript let's you use ES6 while generation other ES versions
// let creates a block variable
// var creates a global variable
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
