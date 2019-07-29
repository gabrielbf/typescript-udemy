var MyMath;
(function (MyMath) {
    var PI = 3.14;
    function calculateCircunference(diameter) {
        return diameter * PI;
    }
    MyMath.calculateCircunference = calculateCircunference;
})(MyMath || (MyMath = {}));
