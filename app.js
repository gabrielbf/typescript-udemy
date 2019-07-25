// Section 5: Using Classes to create Objects
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Gabriel = /** @class */ (function (_super) {
    __extends(Gabriel, _super);
    function Gabriel(username) {
        var _this = _super.call(this, "Gabriel", username) || this;
        _this.name = "Gabriel"; //overrides name in Person class
        _this.age = 31; // access parent with this keyword
        return _this;
        //console.log(this.type); // doesn't work = type is private
    }
    return Gabriel;
}(Person));
var gabriel = new Gabriel("gabriel");
console.log(gabriel);
// 62 Getters & Setters
// Vanilla js has ways to create getters and setters
var Plant = /** @class */ (function () {
    function Plant() {
        this._species = "Default"; // shouldn't use underscore prefix on private - TypeScript style guide
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this._species;
        },
        set: function (value) {
            if (value.length > 3) {
                this._species = value;
            }
            else {
                this._species = "Default";
            }
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var plant = new Plant();
console.log(plant.species);
plant.species = "AB";
console.log(plant.species);
plant.species = "Green plant";
console.log(plant.species);
// 63 Static Properties and Methods
var Helpers = /** @class */ (function () {
    function Helpers() {
    }
    Helpers.calcCircunference = function (diameter) {
        return this.PI * diameter;
    };
    Helpers.PI = 3.14;
    return Helpers;
}());
console.log(2 * Helpers.PI);
console.log(Helpers.calcCircunference(8));
// 64 Abstract Classes
var Project = /** @class */ (function () {
    function Project() {
        this.projectName = "Default Project Name";
        this.budget = 1000;
    }
    Project.prototype.calcBudget = function () {
        return this.budget * 2;
    };
    return Project;
}());
var ITProject = /** @class */ (function (_super) {
    __extends(ITProject, _super);
    function ITProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ITProject.prototype.changeName = function (name) {
        this.projectName = name;
    };
    return ITProject;
}(Project));
//let newProject = new Project(); // Doesn't work because abstract
var newProject = new ITProject();
console.log(newProject);
newProject.changeName("Super IT Project");
console.log(newProject);
