/**
 * Promise
 */
const promiseResolve = Promise.resolve('성공');
const promiseReject = Promise.reject('실패');

promiseResolve
	.then((resolve) => {
		console.log('1회' + resolve);
		return promiseResolve;
	})
	.then((resolve) => {
		console.log('2회' + resolve);
		return promiseReject;
	})
	.catch((reject) => {
		console.log('3회 실패 => ' + reject);
		return promiseResolve;
	})
	.then((resolve) => {
		console.log('4회' + resolve);
		return promiseResolve;
	});
