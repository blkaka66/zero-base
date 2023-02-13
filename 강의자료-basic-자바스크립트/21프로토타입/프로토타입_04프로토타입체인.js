/**
 * 프로토타입 체인
 */
const animal = {
	sayName() {
		return 'ANIMAL';
	},
};

const dog = Object.create(animal);

dog.sayName();
