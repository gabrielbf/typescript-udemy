function greet(person) {
    console.log("Hello, " + person.firstName);
}
function changeName(person) {
    person.firstName = "Anna";
}
var person = {
    firstName: "Gabriel",
    hobbies: ["Cooking", "Sports"]
};
greet({ firstName: "Gabriel", age: 27 });
changeName(person);
greet(person);
