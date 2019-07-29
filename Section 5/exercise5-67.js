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
var Car = /** @class */ (function () {
    function Car(name) {
        this.acceleration_field = 0;
        this.name = name;
    }
    Car.prototype.honk = function () {
        console.log("Toooooooooot!");
    };
    Car.prototype.accelerate = function (speed) {
        this.acceleration_field = this.acceleration_field + speed;
    };
    Object.defineProperty(Car.prototype, "acceleration", {
        get: function () {
            return this.acceleration_field;
        },
        enumerable: true,
        configurable: true
    });
    return Car;
}());
var car = new Car("BMW");
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
var Form = /** @class */ (function () {
    function Form(width, length) {
        this.width = 0;
        this.length = 0;
        this.width = width;
        this.length = length;
    }
    return Form;
}());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rectangle.prototype.calcSize = function () {
        return this.width * this.length;
    };
    return Rectangle;
}(Form));
var rect = new Rectangle(30, 2);
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
var Person = /** @class */ (function () {
    function Person() {
        this._firstName = "";
    }
    Object.defineProperty(Person.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            if (value.length > 3) {
                this._firstName = value;
            }
            else {
                this._firstName = "";
            }
        },
        enumerable: true,
        configurable: true
    });
    return Person;
}());
var person = new Person();
console.log(person.firstName);
person.firstName = "Gabe";
console.log(person.firstName);
person.firstName = "Gabriel";
console.log(person.firstName);
// could call tsc with -t es5 to use a different target from the ts config
