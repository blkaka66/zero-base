/**
 * CommonJS (Import)
 */
const Person = require('./02-CommonJS-person');

const me = new Person('jang', 10, 'Korea');
const you = new Person('kim', 20, 'China');

console.log(me.getName());
console.log(you.getName());
