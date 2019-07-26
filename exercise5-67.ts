// Exercise 1 - How was your TypeScript Class?
//function Car(name) {
//    this.name = name;
//    this.acceleration = 0;
// 
//    this.honk = function() {
//        console.log("Toooooooooot!");
//    };
// 
//    this.accelerate = function(speed) {
//        this.acceleration = this.acceleration + speed;
//    }
//}
//var car = new Car("BMW");
//car.honk();
//console.log(car.acceleration);
//car.accelerate(10);
//console.log(car.acceleration);
console.log("================================================================================");
console.log("Exercise 1");
class Car {
	private acceleration_field: number = 0;
	private name: string;

	public constructor(name: string) {
		this.name = name;
	}

	public honk(): void {
		console.log("Toooooooooot!");	
	}

	public accelerate(speed: number): void {
		this.acceleration_field = this.acceleration_field + speed;
	}

	get acceleration(): number {
		return this.acceleration_field;
	}
}

let car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);

// Exercise 2 - Two objects, based on each other ...
console.log("================================================================================");
console.log("Exercise 2");
//var baseObject = {
//    width: 0,
//    length: 0
//};
//var rectangle = Object.create(baseObject);
//rectangle.width = 5;
//rectangle.length = 2;
//rectangle.calcSize = function() {
//    return this.width * this.length;
//};
//console.log(rectangle.calcSize());

abstract class Form {
	public width: number = 0;
	public length: number = 0;
	
	public abstract calcSize(): number; 

	public constructor(width: number, length: number) {
		this.width = width;
		this.length = length;
	}
}

class Rectangle extends Form {
	public calcSize(): number {
		return this.width * this.length;
	}
}

const rect = new Rectangle(30, 2);
console.log(rect.calcSize());

// Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)
console.log("================================================================================");
console.log("Exercise 3");
//var person = {
//    _firstName: ""
//};
//Object.defineProperty(person, "firstName", {
//    get: function () {
//        return this._firstName;
//    },
//    set: function (value) {
//        if (value.length > 3) {
//            this._firstName = value;
//        }
//        else {
//            this._firstName = "";
//        }
//    },
//    enumerable: true,
//    configurable: true
//});
//console.log(person.firstName);
//person.firstName = "Ma";
//console.log(person.firstName);
//person.firstName = "Maximilian";
//console.log(person.firstName);

class Person {
	private _firstName: string = "";

	get firstName(): string {
		return this._firstName;
	}

	set firstName(value: string) {
		if (value.length > 3) {
			this._firstName = value;
		}
		else {
			this._firstName = "";
		}
	}
}
const person = new Person();
console.log(person.firstName);
person.firstName = "Gabe";
console.log(person.firstName);
person.firstName = "Gabriel";
console.log(person.firstName);
