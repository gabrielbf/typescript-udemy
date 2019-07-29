// Section 7 Doing Contract Work with Interfaces

// 83 Introduction
// 84 The Basics about Interfaces
interface NamedPerson {
	name: string;
}

function greet(person: NamedPerson ) { // person is an object that has a property named name of type string - contract of the interface. It need to AT LEAST have name: string
	console.log("Hello, " + person.name);
}

function changeName(person: NamedPerson ) { // had to define the interface here again
	person.name = "Anna";
}

const person = { 
	name: "Gabriel", // changed from name to firstName, "Hello, undefined"
	age: 27
};

greet(person); // doesn't work anymore
changeName(person);
greet(person); // doesn't work anymore

// 85 Interfaces and Properties
