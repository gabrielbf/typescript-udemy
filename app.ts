var myName = "Max";
var myAge = 27

// 32 Changing the Compiler Behavior on Errors
//myName = 30; // gives an error but compiles anyway - standard behavior
// tsconfig.json - add noEmitOnError True so tsc doesn't create file if it finds any error

// 33 Debugging your TypeScript Code using Source Maps
// tsconfig.json - sourceMap true we get access to the ts file and can debug in the browser
