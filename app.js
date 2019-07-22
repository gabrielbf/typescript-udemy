// string
var myName = 'Gabriel';
//myName = 29;
// number
var myAge = 27; // can also be floating point number - TypeScript doesn't differ between them 
//myAge = 'Gabriel';
// boolean 
var hasHobbies = false;
//hasHobbies = 1; // gives error even though you can cast it
// assign types
//let myRealAge; //type any
var myRealAge; //explicit assinging type to variable
myRealAge = 27;
//myRealAge = '27'; //no error from tsc
