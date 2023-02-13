/**
 * 프로토타입 확장 (extends, 상속)
 */
// Super Class
function Animal(name, sound) {
	this.name = name;
	this.sound = sound;
}

Animal.prototype.getInfo = function () {
	return (
		this.name +
		'가(이)' +
		this.sound +
		' 소리를 낸다.'
	);
};

// Sub Class
function Friends(name, sound) {
	Animal.call(this, name, sound);
}

Friends.prototype = Object.create(
	Animal.prototype,
);

Friends.prototype.constructor = Friends;

const dog = new Friends('개', '멍멍');
const cat = new Friends('고양이', '냐옹');

dog.getInfo();
cat.getInfo();

dog.constructor.name;
cat.constructor.name;

dog instanceof Friends;
dog instanceof Animal;

const arr = [];

arr instanceof Array;
arr instanceof Object;
