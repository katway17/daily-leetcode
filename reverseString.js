// From Practice Problem (LeetCode-style)

/**
 * Problem: Reverse String
 * Write a function `reverseString(str)` that takes a string and returns it reversed.
 *
 * Example:
 * reverseString("hello");      // "olleh"
 * reverseString("JavaScript"); // "tpircSavaJ"
 * reverseString("");           // ""
 * reverseString("a");          // "a"
 *
 * Constraints:
 * - Input will always be a valid string
 * - Cannot use .reverse() directly on the string (strings don't have it!)
 */

// ✅ Answer:
function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

// Test cases
console.log(reverseString("hello"));       // "olleh"
console.log(reverseString("JavaScript"));  // "tpircSavaJ"
console.log(reverseString(""));            // ""
console.log(reverseString("a"));           // "a"
