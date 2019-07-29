// Section 6: Namespaces and Modules
// 71 An introduction to namespaces

//namespace MyMath {
//	const PI = 3.14
//
//	export function calculateCircunference(diameter: number) { // needs export to be accessible outside
//		return diameter * PI ;
//	}
//
//	export function calculateRectangle(width: number, length: number) { // needs export to be accessible outside
//		return width * length;
//	}
//}

//const PI = 2.99; // separate from MyMath namespace
//
//console.log(MyMath.calculateRectangle(10, 20));
//console.log(MyMath.calculateCircunference(3));
//console.log(PI);

// 72 Namespaces and Multiple Files
// Create 2 files, rectangleMath.ts and circleMath.ts

//const PI = 2.99; // separate from MyMath namespace

// doesn't import the other two files
// Namespaces get combined since they share the same name
//console.log(MyMath.calculateRectangle(10, 20));
//console.log(MyMath.calculateCircunference(3));
//console.log(PI);

// Can bundle all files into one to with --outFile app.js circleMath.ts rectangleMath.ts app.ts

// 73 Namespace Imports /// <reference path="" />
/// <reference path="circleMath.ts"/>
/// <reference path="rectangleMath.ts"/>

//const PI = 2.99; // separate from MyMath namespace
//console.log(MyMath.calculateRectangle(10, 20));
//console.log(MyMath.calculateCircunference(3));
//console.log(PI);

// Had to remove commojs module from tsconfig.json - changed it to none
// tsc --outFile app.js

// 74 More on Namespaces
// Can have namespaces inside namespaces
// Has to use tsc --outFile app.js

//import CircleMath =  MyMath.Circle; // Not ES6 syntax. Creates an alias for MyMath.Circle

//const PI = 2.99; // separate from MyMath namespace
//console.log(MyMath.calculateRectangle(10, 20));
//console.log(CircleMath.calculateCircunference(3));
//console.log(PI);

// 75 Limitations of Namespaces

//import CircleMath =  MyMath.Circle; // Not ES6 syntax. Creates an alias for MyMath.Circle

//const PI = 2.99; // separate from MyMath namespace
//console.log(MyMath.calculateRectangle(10, 20));
//console.log(CircleMath.calculateCircunference(3));
//console.log(PI);

// our files are not very declarative - ES6 modules are better suited for larger projects

// 76 Modules
// create folder math
// create files rectangle.ts and circle.ts

// exported const and function in circle.ts, making them available outside of the file
//import {PI, calculateCircunference } from "./math/circle"; // leave out the file extension - tsc resolves that
 
//console.log(PI);
//console.log(calculateCircunference(10));
//console.log();

// ran npm install --save systemjs@0.21.5
// we need a module loader
// Included script at start of index html to execute systemjs.
// Running with tsc

// 79 Importing & Exporting Modules

//import { PI, calculateCircunference } from "./math/circle"; // leave out the file extension - tsc resolves that
import * as Circle from "./math/circle"; // import all and alias to Circle
import calc from "./math/rectangle"; // use another name for the default import in rectangle.ts
 
console.log(Circle.PI);
console.log(Circle.calculateCircunference(10));
console.log(calc(20, 50));
