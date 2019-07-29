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

import CircleMath =  MyMath.Circle; // Not ES6 syntax. Creates an alias for MyMath.Circle

const PI = 2.99; // separate from MyMath namespace
console.log(MyMath.calculateRectangle(10, 20));
console.log(CircleMath.calculateCircunference(3));
console.log(PI);
