/**
 * 프로퍼티 접근자 (getter, setter)
 */
const person = {
	_firstName: 'jang',
	lastName: 'hyeon-seok',

	get firstName() {
		return this._firstName.toUpperCase();
	},

	set firstName(newFirstName) {
		if (typeof newFirstName !== 'string') {
			this._firstName = 'undefined name';

			return;
		}

		this._firstName = newFirstName;
	},

	get fullName() {
		return (
			this._firstName +
			' ' +
			this.lastName +
			' ' +
			'입니다'
		);
	},
};

console.log(person.firstName);

person.fullName;
