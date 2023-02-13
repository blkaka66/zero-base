/**
 * sort
 */
const numbers = [4, 2, 5, 1, 3];
const words = ['마', '가', '라', '나', '다'];

const orderNumbers = numbers.sort(function (
	a,
	b,
) {
	return a - b;
});

const 내림차순 = (a, b) => b.localeCompare(a);
const 오름차순 = (a, b) => a.localeCompare(b);

const orderWords = words.sort(오름차순);
