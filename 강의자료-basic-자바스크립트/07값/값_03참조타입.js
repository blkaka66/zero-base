/**
 * 객체, 참조(Reference)
 */

const obj = {
	name: 'jang',
	age: 11,
	arr: [],
	func: function () {},
	child: {},
};
const array = [[], 11, 'jang', function () {}];

function func() {}

console.log(obj instanceof Object);
console.log(func instanceof Function);
console.log(array instanceof Array);

console.log(Object.prototype.toString.call(func));
console.log(Object.prototype.toString.call(array));

console.log(typeof func);
console.log(typeof array);

const obj2 = {
	str: 'string',
};

obj2.str.toUpperCase();
obj2.num = 123;
obj2.bool = true;

const arr = [1, 2, 3];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);

arr[3] = 100;

console.log(arr);
