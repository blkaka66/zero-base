/**
 * 클래스와 인스턴스
 */
class Person {
	constructor(name, age, location) {
		this.name = name;
		this.age = age;
		this.location = location;
	}

	getName() {
		return this.name + '입니다';
	}
}

const me = new Person('jang', 10, 'Korea');
const you = new Person('kim', 20, 'China');

console.log(me.getName());
console.log(you.getName());
