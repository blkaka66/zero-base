/**
 * 배열 값 검색
 */
const members = [
	'현석',
	'장현석',
	'제로',
	'베이스',
];

members.find(function (member) {
	return member === '제로';
});

members.findIndex(function (member) {
	return member === '제로';
});

members.indexOf(function (member) {
	return member === '제로';
});

members.lastIndexOf(function (member) {
	return member === '제로';
});

members.includes('제로');
