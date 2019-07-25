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

// 59 Inheritance
// ES6 and TypeScript
//class Gabriel extends Person {
//	name: string = "Gabriel"; //overrides name in Person class
//}
//const gabriel = new Gabriel("Anna", "gabriel"); // overwrites "Anna" with "Gabriel"
//console.log(gabriel);

// 60 Inheritance and Constructors
//class Gabriel extends Person {
//	name: string = "Gabriel"; //overrides name in Person class
//
//	constructor(username: string) { // when extending, you always have to call super
//		super("Gabriel", username);
//	}
//}
//const gabriel = new Gabriel("gabriel");
//console.log(gabriel);

// 61 Inheritance Wrap Up
class Gabriel extends Person {
	name: string = "Gabriel"; //overrides name in Person class

	constructor(username: string) { // when extending, you always have to call super
		super("Gabriel", username);
		this.age = 31; // access parent with this keyword
		//console.log(this.type); // doesn't work = type is private
	}
}
const gabriel = new Gabriel("gabriel");
console.log(gabriel);

// 62 Getters & Setters
// Vanilla js has ways to create getters and setters
class Plant {
	private _species: string = "Default"; // shouldn't use underscore prefix on private - TypeScript style guide

	get species() {
		return this._species;
	}

	set species(value: string) { // property name accessible to outside
		if ( value.length > 3) {
			this._species = value;	
		} else {
			this._species = "Default";
		}
	}
}
let plant = new Plant();
console.log(plant.species);
plant.species = "AB";
console.log(plant.species);
plant.species = "Green plant";
console.log(plant.species);
