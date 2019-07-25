// Section 5: Using Classes to create Objects

// 57 Creating Classes and Class Properties
// ES6 classes
//class Person {
//	//public name: string; 	// public é default
//	name: string;
//	private type: string; 	// no private in ES6
//	protected age: number; 	// only to inheritors
//
//	constructor(name: string, public username: string) { // creates public username property of type string inside class
//		this.name = name;
//	}
//}


// 58 Class Methods and Access Modifiers
class Person {
	//public name: string; 	// public é default
	name: string;
	private type: string; 	// no private in ES6
	protected age: number = 27; 	// only accessible to inheritors - initialized here, not through constructor

	constructor(name: string, public username: string) { // creates public username property of type string inside class
		this.name = name;
	}

	printAge() {
		console.log(this.age);
	}

	private setType(type: string) { // methods can have access modifiers
		this.type = type;
		console.log(this.type);
	}
}
const person = new Person("Gabriel", "gabriel");
//console.log(person.name, person.username, person.age, person.type); // compiler error due to access modifiers
console.log(person.name, person.username);
person.printAge();
//person.setType("Cool Guy"); // doesn't work anymore because it's private now
