/**
 * 프로퍼티 조작
 */
const person = {
	firstName: 'jang',
	location: 'korea',
};

// 추가
person['lastName'] = 'hyeonseok';
// 수정
person.lastName = 'hyeon-seok';
// 삭제
delete person.location;

person;
