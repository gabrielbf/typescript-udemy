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

// 110 Method Decorators
//function editable(value: boolean) {
//	return function(target: any, propName: string, descriptor: PropertyDescriptor) { // PropertyDescriptor is from js
//		// if the method should be writable or not
//		descriptor.writable = value;
//	}
//}
//
//
//class Project {
//	projectName: string;
//	constructor(name: string) {
//		this.projectName = name;
//	}
//
//	@editable(false) // now the method can't be rewritable
//	calcBudget() {
//		console.log(1000);
//	}
//}
//
//const project = new Project("Super Project");
//project.calcBudget();
//project.calcBudget =  function() {
//	console.log(2000);
//}
//project.calcBudget();

// 111 Property Decorators

function editable(value: boolean) {
	return function(target: any, propName: string, descriptor: PropertyDescriptor) { // PropertyDescriptor is from js
		// if the method should be writable or not
		descriptor.writable = value;
	}
}

function overwritable(value: boolean) {
	// TypeScript doesn't have access to the PropertyDescriptor for technical reasons
	return function(target: any, propName: string): any { // either the constructor function in a static class or the prototype in a stantiated one
		const newDescriptor: PropertyDescriptor = {
			writable: value
		};
		return newDescriptor;
	}
}

class Project {
	@overwritable(false)
	projectName: string;

	constructor(name: string) {
		this.projectName = name;
	}

	@editable(false) // now the method can't be rewritable
	calcBudget() {
		console.log(1000);
	}
}

const project = new Project("Super Project");
project.calcBudget();
project.calcBudget =  function() {
	console.log(2000);
}
project.calcBudget();
console.log(project); // results in empty project because the overwritable fuction is preventing the constructor to write to projectName
