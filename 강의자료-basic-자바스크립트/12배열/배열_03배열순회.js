/**
 * 배열 순회
 */

const arr = [1, 2, 3];

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);

for (let i = 0; i < arr.length; i++) {
	console.log(arr[i]);
}

let i = 0;

if (i < arr.length) {
	console.log(arr[i]);
	i++;
}

let j = 0;

while (j < arr.length) {
	console.log(arr[j]);
	j = j + 1;
}

for (const value of arr) {
	console.log(value);
}

for (const index in arr) {
	console.log(arr[index]);
}
