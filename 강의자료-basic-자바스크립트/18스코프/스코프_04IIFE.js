/**
 * 즉시 실행 함수 표현식
 * (IIFE, Immediately Invoked Function Expression)
 *
 * 새로운 스코프를 생성할 수 있다.
 */
const result = (8 * 3) + 4;

(function () { // IIFE 시작
	// IIFE 내부 동작 코드
})(); // IIFE 종료

(function () {
	var aName = 'Barry';
});

if (true) {
	var temp = '';

	(function () {
		var temp = 'hello';

		console.log(temp);
	})();
}

console.log(temp);

;(function () {})()
(function () {})()

;(function (num) {
	console.log(num);
})(1);

(function () {
	var privateData = 'secret';

	console.log(privateData);
})();

console.log(privateData);
