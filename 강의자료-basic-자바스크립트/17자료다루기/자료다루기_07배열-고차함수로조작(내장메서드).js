/**
 * 배열 고차 함수로 조작
 *
 * map
 * filter
 * reduce
 */
const langs = ['JS', 'HTML', 'CSS'];

const newLangs = langs.map(function (lang) {
	return lang.toLowerCase() + ' 언어';
});

const langs2 = ['JS', 'HTML', 'CSS', 0, 1, 2, 3];

const isString = (el) => typeof el === 'string';
const isNumber = (el) => typeof el === 'number';

const newLangs2 = langs2.filter(isString);
const newLangs3 = langs2.filter(isNumber);

newLangs2;
newLangs3;

function sumTotal() {
	let temp = 0;

	for (let i = 0; i < arguments.length; i++) {
		temp = temp + arguments[i];
	}

	return temp;
}

function sumTotal(...numbers) {
	return numbers.reduce(
		(total, current) => total + current,
		0,
	);
}

sumTotal(1, 2, 3, 4, 5, 6, 7);
