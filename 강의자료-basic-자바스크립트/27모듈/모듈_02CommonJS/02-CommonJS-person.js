/**
 * CommonJS (Export)
 */
function Person(name, age, location) {
	this.name = name;
	this.age = age;
	this.location = location;

	this.getName = function () {
		return this.name + '입니다';
	};
}

module.exports = Person;
