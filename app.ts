// Section 9 Behind the scenes with Decorators
// 105 Creating a Class Decorator
// logged function only gets constructor as parameter
function logged(constructorFn: Function) {
	console.log(constructorFn);
}

@logged
class Person {
	constructor() {
		console.log("Hi!");	
	}
}

// 106 Decorator Factories
// same as Python; you need another function to receive the parameters of the decorator
function logging(value: boolean) {
	return value ? logged : null;
}

@logging(true)
class Car {
	constructor() {
	}
}

// 107 Creating a useful Decorator
function printable(constructorFn: Function) {
	constructorFn.prototype.print = function() {
		console.log(this);
	}
}

//@printable
//class Plant {
//	name = "Green Plant";
//}
//
//const plant = new Plant();
//(<any>plant).print();

// 108 Using Multiple Decorators
@logging(true)
@printable
class Plant {
	name = "Green Plant";
}

const plant = new Plant();
(<any>plant).print();

// 109 A first summary
// each type of decorator has a method signature. Look for them in the TypeScript documentation
