/**
 * 비동기와 동기
 */
console.log(1);

console.log(2);

console.log(3);

console.log(4);

console.log(5);

/**
 * 스레드
 * - 강의를 보는 눈
 * - 강의를 듣는 귀
 *
 * 자바스크립트는 싱글 스레드 언어
 */

const btn = document.querySelector('button');

// 사용자가 버튼을 클릭할때마다 함수를 실행시켜준다.
btn.addEventListener('click', () => {
	alert('You clicked me!');

	let pElem = document.createElement('p');

	pElem.textContent =
		'This is a newly-added paragraph.';
	document.body.appendChild(pElem);
});

console.log('시작 ===');

setTimeout(() => {
	console.log('Set Timeout');
}, 1000);

console.log('종료 ===');
