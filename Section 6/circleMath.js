var MyMath;
(function (MyMath) {
    var Circle;
    (function (Circle) {
        var PI = 3.14;
        function calculateCircunference(diameter) {
            return diameter * PI;
        }
        Circle.calculateCircunference = calculateCircunference;
    })(Circle = MyMath.Circle || (MyMath.Circle = {}));
})(MyMath || (MyMath = {}));
