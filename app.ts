// Section 6: Namespaces and Modules
// 71 An introduction to namespaces

namespace MyMath {
	const PI = 3.14

	export function calculateCircunference(diameter: number) { // needs export to be accessible outside
		return diameter * PI ;
	}

	export function calculateRectangle(width: number, length: number) { // needs export to be accessible outside
		return width * length;
	}
}

const PI = 2.99; // separate from MyMath namespace

console.log(MyMath.calculateRectangle(10, 20));
console.log(MyMath.calculateCircunference(3));
console.log(PI);
