/**
 * 전역 스코프 vs 지역 스코프
 *
 * 전역 스코프
 *
 * 지역 스코프
 *  ㄴ 함수 스코프
 *  ㄴ 블록 스코프
 */

let foo = 'foo';

{
	foo = 'foooooooo';

	console.log(foo);
}

function func() {
	foo = 'foooo';

	console.log(foo);
}

if (true) {
	foo = 'fooooooooooo';

	console.log(foo);
}

func();

{
	let foo = 'foooooooo';

	console.log(foo);
}

function func() {
	let foo = 'foooo';

	console.log(foo);
}

if (true) {
	let foo = 'fooooooooooo';

	console.log(foo);
}

console.log(foo);
