// Section 7 Doing Contract Work with Interfaces

// 83 Introduction
// 84 The Basics about Interfaces
//interface NamedPerson {
//	name: string;
//}
//
//function greet(person: NamedPerson ) { // person is an object that has a property named name of type string - contract of the interface. It need to AT LEAST have name: string
//	console.log("Hello, " + person.name);
//}
//
//function changeName(person: NamedPerson ) { // had to define the interface here again
//	person.name = "Anna";
//}
//
//const person = { 
//	name: "Gabriel", // changed from name to firstName, "Hello, undefined"
//	age: 27
//};

//greet(person); 
//changeName(person);
//greet(person); 

// 85 Interfaces and Properties
//interface NamedPerson {
//	firstName: string;
//	age?: number; // ? optional argument
//	[propName: string]: any; // special notation for propety that you don't know the name yet
//}
//
//function greet(person: NamedPerson ) { // person is an object that has a property named name of type string - contract of the interface. It need to AT LEAST have name: string
//	console.log("Hello, " + person.firstName);
//}
//
//function changeName(person: NamedPerson ) { // had to define the interface here again
//	person.firstName = "Anna";
//}
//
//const person = { 
//	firstName: "Gabriel", // changed from name to firstName, "Hello, undefined"
//	hobbies: ["Cooking", "Sports"]
//};
// special check tsc does when passing object literals
// const is not check as strictly
//greet({firstName: "Gabriel", age: 27}); // Object literal may only specify known properties, and 'age' does not exist in type 'NamedPerson'. - age property is not defined in the interface
//changeName(person);
//greet(person); 

// 86 Interfaces and Methods
interface NamedPerson {
	firstName: string;
	age?: number; // ? optional argument
	[propName: string]: any; // special notation for propety that you don't know the name yet
	greet(lastName: string): void;
}

function greet(person: NamedPerson ) { // person is an object that has a property named name of type string - contract of the interface. It need to AT LEAST have name: string
	console.log("Hello, " + person.firstName);
}

function changeName(person: NamedPerson ) { // had to define the interface here again
	person.firstName = "Anna";
}

const person: NamedPerson = { 
	firstName: "Gabriel", // changed from name to firstName, "Hello, undefined"
	hobbies: ["Cooking", "Sports"],
	greet(lastName: string) {
		console.log("Hi, I am " + this.firstName + " " + lastName);
	}

};
// special check tsc does when passing object literals
// const is not check as strictly
//greet({firstName: "Gabriel", age: 27}); // Object literal may only specify known properties, and 'age' does not exist in type 'NamedPerson'. - age property is not defined in the interface
changeName(person);
greet(person); 
person.greet("Anything");


// 84 Using Interfaces with Classes
class Person implements NamedPerson {
	firstName: string;
	lastName: string; // can have extra properties - will still work
	greet(lastName: string) {
		console.log("Hi, I am " + this.firstName + " " + lastName);
	};
}

const myPerson = new Person();
myPerson.firstName = "Gabriel";
greet(myPerson);
myPerson.greet("Anything");
