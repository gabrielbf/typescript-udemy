// Section 5: Using Classes to create Objects

// 57 Creating Classes and Class Properties
// ES6 classes
class Person {
	//public name: string; 	// public é default
	name: string;
	private type: string; 	// no private in ES6
	protected age: number; 	// only to inheritors

	constructor(name: string, public username: string) { // creates public username property of type string inside class
		this.name = name;
	}
}

const person = new Person("Gabriel", "gabriel");
console.log(person.name, person.username, person.age, person.type); // compiler error due to access modifiers
