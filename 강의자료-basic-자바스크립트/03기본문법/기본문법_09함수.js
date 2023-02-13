/**
 * 함수
 */

// 함수 선언문 (매개변수 X)
function func() {
	if (10 > 0) {
		return 'Hello';
	}
}

console.log(func());

// 함수 선언문 (매개변수 O)
function func2(num) {
	if (10> num) {
		return 'Hello';
	}
}

// 반환 없는 함수
function voidFunc() {
	console.log('void func');
}

console.log(func2());

// 함수 선언문 (매개변수 O)
function sum(num1, num2, num3, num4) {
	return num1 + num4; //순서를 지켜야 함
}

console.log(sum(1,2));

// 함수 선언문 (매개변수 O)
function multiple(num1, num2) {
	return num1 * num2;
}

console.log(multiple(1,2));