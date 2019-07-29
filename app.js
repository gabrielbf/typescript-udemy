// Section 6: Namespaces and Modules
// 71 An introduction to namespaces
var MyMath;
(function (MyMath) {
    var PI = 3.14;
    function calculateCircunference(diameter) {
        return diameter * PI;
    }
    MyMath.calculateCircunference = calculateCircunference;
    function calculateRectangle(width, length) {
        return width * length;
    }
    MyMath.calculateRectangle = calculateRectangle;
})(MyMath || (MyMath = {}));
var PI = 2.99;
console.log(MyMath.calculateRectangle(10, 20));
console.log(MyMath.calculateCircunference(3));
console.log(PI);
