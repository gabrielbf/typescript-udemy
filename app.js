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
var echo2 = betterEcho;
console.log(echo2("Something"));
var SimpleMath = (function () {
    function SimpleMath() {
    }
    SimpleMath.prototype.calculte = function () {
        return +this.baseValue * +this.multiplyValue;
    };
    return SimpleMath;
}());
var simpleMath = new SimpleMath();
simpleMath.baseValue = "10";
simpleMath.multiplyValue = 20;
console.log(simpleMath.calculte());
