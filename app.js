function greet(person) {
    console.log("Hello, " + person.name);
}
function changeName(person) {
    person.name = "Anna";
}
var person = {
    name: "Gabriel",
    age: 27
};
greet(person);
changeName(person);
greet(person);
