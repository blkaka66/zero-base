/**
 * 호이스팅
 *
 * 변수 선언을 끌어올린다.
 */

function foo() {
	console.log(hoist);

	var hoist = '호이스팅';

	console.log(hoist);
}

function foo() {
	var hoist;

	console.log(hoist);

	hoist = '호이스팅';

	console.log(hoist);
}

function foo() {
	console.log(hoist);

	let hoist = '호이스팅';

	console.log(hoist);
}

foo();
