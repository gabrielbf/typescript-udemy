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
var Person = /** @class */ (function () {
    function Person(name, username) {
        this.username = username;
        this.age = 27; // only accessible to inheritors - initialized here, not through constructor
        this.name = name;
    }
    Person.prototype.printAge = function () {
        console.log(this.age);
    };
    Person.prototype.setType = function (type) {
        this.type = type;
        console.log(this.type);
    };
    return Person;
}());
var person = new Person("Gabriel", "gabriel");
//console.log(person.name, person.username, person.age, person.type); // compiler error due to access modifiers
console.log(person.name, person.username);
person.printAge();
person.setType("Cool Guy");
