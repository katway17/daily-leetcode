// From Practice Problem (LeetCode-style)

/**
 * Problem:
 * Write a function `isEven(n)` that takes an integer and returns `true` if it's even,
 * and `false` if it's odd.
 * 
 * Example:
 * isEven(2);   // true
 * isEven(7);   // false
 * isEven(0);   // true
 * isEven(-4);  // true
 * 
 * Constraints:
 * -1000 <= n <= 1000
 * Must return a boolean (true or false)
 */

// ✅ Answer:
function isEven(n) {
    return n % 2 === 0;
}

// 🧪 Test cases
console.log(isEven(2));   // true
console.log(isEven(7));   // false
console.log(isEven(0));   // true
console.log(isEven(-4));  // true
