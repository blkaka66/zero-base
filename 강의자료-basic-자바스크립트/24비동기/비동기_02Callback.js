/**
 * Callback
 */
console.log('1');

setTimeout(() => {
	console.log('2');
}, 1000);

console.log('3');

console.log('1');

function setTimeoutWithCallback(callbackFunc) {
	setTimeout(() => {
		console.log('2');
		callbackFunc();
	}, 1000);
}

setTimeoutWithCallback(() => console.log('3'));

//
const isFilter = function (ele, index, array) {
	console.log(ele);
};

[1, 2, 3].filter(isFilter);

Array.prototype.filter = function (callback) {
	const array = this; // ...write code

	for (let i = 0; i < array.length; i++) {
		callback(array[i], i, array);
	}
};

Element.addEventListener('click', (e) => console.log(e));

Element.addEventListener = function (eventType, callback) {
	if (eventType === 'click') {
		const clickEventObject = {
			target: {},
		};
		callback(clickEventObject);
	}
};
