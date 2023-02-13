/**
 * constructor (생성자)
 */
function Person(name, age) {
	this.name = name;
	this.age = age;
}

const jang = new Person('jang', 99);
const hs = new Person('hs', 11);

jang.constructor.name;
hs.constructor.name;

jang instanceof Person;
hs instanceof Person;

const obj = {};
const arr = [];
const func = function () {};
const str = new String('str');

obj instanceof Object;
arr instanceof Array;
func instanceof Function;
str instanceof String;
