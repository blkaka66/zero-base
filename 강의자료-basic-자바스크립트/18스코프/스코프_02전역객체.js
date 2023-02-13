/**
 * 전역 객체
 *  1. 브라우저 => window
 *  2. NodeJS => global
 */
window.foo = 'foo';

window.bar = function () {
	return 'hello' + this.foo;
};

window.bar();

function name() {
	window.aa = 'aa';
}

if (true) {
	window.cc = 'cc';
}

console.log(global);
