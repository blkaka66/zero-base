/**
 * 커스텀 에러
 */
class LoginError extends Error {
	constructor(message) {
		super(message);

		this.name = 'Login Error';
	}
}

class SomeError extends LoginError {}

function login(id, password) {
	if (id !== 'a') {
		throw new LoginError('아이디 불일치');
	}

	if (id === 'a' && password === 'a') {
		return true;
	}
}

try {
	login('ac', 'a');
} catch (e) {
	console.error(e);
	if (e instanceof LoginError) {
		console.error('로그인 에러가 발생했습니다');
	} else {
		console.error('에러가 발생했습니다');
	}
} finally {
	console.log('로그인 시도', new Date());
}
