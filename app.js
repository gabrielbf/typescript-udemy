function betterEcho(data) {
    return data;
}
console.log(betterEcho("Gabriel").length);
console.log(betterEcho("27").length);
console.log(betterEcho({ name: "Gabriel", age: 27 }));
var testResults = [1.94, 2.33];
testResults.push(-2.99);
console.log(testResults);
function printAll(args) {
    args.forEach(function (element) { return console.log(element); });
}
printAll(["Pen", "Pineapple", "Apple", "Pen"]);
