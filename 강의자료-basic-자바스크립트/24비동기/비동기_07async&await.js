/**
 * Async & Await
 */

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

async function americano(someDrink) {
	try {
		const result = await starbucks(someDrink);

		return result;
	} catch (error) {
		console.log(error);
	} finally {
		console.log('감사합니다');
	}
}
