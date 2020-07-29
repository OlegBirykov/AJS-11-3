/* eslint no-console: 0 */

// Вариант 1
function canIterate(obj) {
  try {
    return !!obj[Symbol.iterator];
  } catch (e) {
    return false;
  }
}

// Вариант 2
function canIterate1(obj) {
  try {
    for (const prop of obj) {
      console.log(prop);
      break;
    }
    return true;
  } catch (e) {
    return false;
  }
}

console.log(canIterate(new Map())); // true
console.log(canIterate(new Set())); // true
console.log(canIterate(null)); // false
console.log(canIterate(10)); // false
console.log(canIterate('Netology')); // true
console.log('');
console.log(canIterate1(new Map())); // true
console.log(canIterate1(new Set())); // true
console.log(canIterate1(null)); // false
console.log(canIterate1(10)); // false
console.log(canIterate1('Netology')); // true
