/**
 * 스택 추적
 */
function y() {
	z();
}

function x() {
	y();
}

try {
	x();
} catch (e) {
	console.error(e.stack);
}
