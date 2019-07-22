// string
let myName: string = 'Gabriel';
//myName = 29;

// number
let myAge: number = 27; // can also be floating point number - TypeScript doesn't differ between them 
//myAge = 'Gabriel';

// boolean 
let hasHobbies: boolean = false;
//hasHobbies = 1; // gives error even though you can cast it

// assign types
//let myRealAge; // type any
let myRealAge: number; // explicit assinging type to variable
myRealAge = 27;
//myRealAge = '27'; // no error from tsc


// array
//let hobbies = ["Cooking", "Sports"]; // TypeScript infers this to be an array of strings

//can override this behavior with
let hobbies: any[] = ["Cooking", "Sports"]; // it is not an array of strings only anymore

//console.log(hobbies[0]);
//console.log(typeof hobbies);
hobbies = [100]; // TypeScript doesn't allow other types in this array
//hobbies = 100; // still gives error
