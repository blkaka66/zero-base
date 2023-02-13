/**
 * New Promise
 */
const one = Promise.resolve('1');
const two = (delay) =>
	new Promise((resolve) =>
		setTimeout(() => {
			resolve('2');
		}, delay),
	);
const three = Promise.resolve('3');

one
	.then((oneRes) => {
		console.log(oneRes);

		return two(3000);
	})
	.then((twoRes) => {
		console.log(twoRes);

		return three;
	})
	.then((threeRes) => {
		console.log(threeRes);
	})
	.finally(() => console.log('END'));

const starbucks = function (coffeeName) {
	return new Promise((resolve, reject) => {
		if (coffeeName === '아메리카노') {
			resolve('아메리카노 한잔입니다.');
		} else {
			reject('아메리카노는 없습니다.');
		}
	});
};

starbucks('아메리')
	.then((res) => console.log(res))
	.catch((rej) => console.log(rej))
	.finally(() => console.log('감사합니다'));
