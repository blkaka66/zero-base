/**
 * Closure
 */
function returnChar(x) {
	let outerChar = x;

	return function returnChar2(y) {
		let innerChar = y;

		return outerChar + innerChar;
	};
}

const x = returnChar('x');
const xy = x('y');
const xz = x('z');
const xc = x('c');

///

function outer(x) {
	let outerVal = x;

	return function inner(y) {
		let innerVal = y;

		return {
			x: outerVal,
			y: innerVal,
		};
	};
}

///////

const sum = (num1) => (num2) => (num3) =>
	num1 + num2 + num3;

const sum5 = sum(5);
const sum10 = sum(10);

sum5(10)(10);
sum5(20)(10);
sum5(30)(10);

sum10(5)(10);
sum10(15)(10);
