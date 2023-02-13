/**
 * 클래스 확장 (extends, 상속)
 */
// Super Class
class Animal {
	constructor(name, sound) {
		this.name = name;
		this.sound = sound;
	}

	getInfo() {
		return (
			this.name +
			'가(이)' +
			this.sound +
			' 소리를 낸다.'
		);
	}
}

// Sub Class
class Friends extends Animal {
	constructor(name, sound) {
		super(name, sound);
	}
}

const dog = new Friends('개', '멍멍');
const cat = new Friends('고양이', '냐옹');

dog.getInfo();
cat.getInfo();

dog.constructor.name;
cat.constructor.name;

dog instanceof Friends;
dog instanceof Animal;
