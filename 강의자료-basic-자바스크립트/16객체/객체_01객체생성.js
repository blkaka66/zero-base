/**
 * 객체 생성
 */

// 싱글 리터럴 객체
const object = {
	property: 'value',
	method: function () {},
};

function NewObject(name) {
	this.name = name;
}

const newObject = new NewObject('jang');

const newObject2 = Object.create(
	Object.prototype,
	{
		name: {
			value: 'jang',
			writable: true, // 덮어쓸 수 있는지
			enumerable: true, // 열거할 수 있는지
			configurable: true, // 객체 서술자를 수정할 수 있는지
		},
	},
);

newObject2.name = 'Kim';

for (const key in newObject2) {
	console.log(key);
}

newObject2;
