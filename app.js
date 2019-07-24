var myName = "Max";
var myAge = 27;
// 32 Changing the Compiler Behavior on Errors
//myName = 30; // gives an error but compiles anyway - standard behavior
// tsconfig.json - add noEmitOnError True so tsc doesn't create file if it finds any error
// 33 Debugging your TypeScript Code using Source Maps
// tsconfig.json - sourceMap true we get access to the ts file and can debug in the browser
// 34 Avoiding implicit "Any"
// noImplicitAny false
var anything; // type any because no type was given
anything = 12;
// 35 More Compiler Options
// 36 Compiler Improvements with TypeScript 2.0
// strictNullChecks checks if variables have been initialized
function controlMe(isTrue, somethingElse) {
    var result;
    if (isTrue) {
        result = 12;
    }
    result = 33;
    return result;
}
