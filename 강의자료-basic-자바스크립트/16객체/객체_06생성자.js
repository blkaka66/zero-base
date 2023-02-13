/**
 * 생성자
 */
function Person(name, age, location) {
	this.name = name;
	this.age = age;
	this.location = location;

	this.getName = function () {
		return this.name + '입니다';
	};
}

const me = new Person('jang', 10, 'Korea');
const you = new Person('kim', 20, 'China');

me.getName();
you.getName();
