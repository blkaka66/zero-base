/**
 * Promise
 */
const promiseResolve = Promise.resolve('성공');

promiseResolve
	.then((resolve) => {
		console.log('1회' + resolve);
		return promiseResolve;
	})
	.then((resolve) => {
		console.log('2회' + resolve);
		return promiseResolve;
	})
	.then((resolve) => {
		console.log('3회' + resolve);
		return promiseResolve;
	})
	.then((resolve) => {
		console.log('4회' + resolve);
		return promiseResolve;
	});
