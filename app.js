// Section 5: Using Classes to create Objects
// 57 Creating Classes and Class Properties
// ES6 classes
var Person = /** @class */ (function () {
    function Person(name, username) {
        this.username = username;
        this.name = name;
    }
    return Person;
}());
var person = new Person("Gabriel", "gabriel");
console.log(person.name, person.username, person.age, person.type);
