// From Practice Problem (LeetCode-style)

/**
 * Problem: Count Vowels
 * Write a function `countVowels(str)` that returns the number of vowels in the given string.
 *
 * Vowels: a, e, i, o, u (case-insensitive)
 *
 * Example:
 * countVowels("hello");        // 2
 * countVowels("JavaScript");   // 3
 * countVowels("why?");         // 0
 * countVowels("AEIOU");        // 5
 *
 * Constraints:
 * - Input is always a valid string
 * - Should count both lowercase and uppercase vowels
 */

// ✅ Answer:
function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;

    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}

// Test cases
console.log(countVowels("hello"));        // 2
console.log(countVowels("JavaScript"));   // 3
console.log(countVowels("why?"));         // 0
console.log(countVowels("AEIOU"));        // 5
