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
