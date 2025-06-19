// From Practice Problem (LeetCode-style)

/**
 * Problem: Count Odds
 * Write a function `countOdds(arr)` that returns how many numbers in the array are odd.
 *
 * Example:
 * countOdds([1, 2, 3, 4, 5]);    // 3
 * countOdds([2, 4, 6]);          // 0
 * countOdds([7, 9, 11, 13]);     // 4
 * countOdds([]);                // 0
 * 
 * Constraints:
 * - Input is an array of numbers (positive or negative)
 * - Return a number (the count of odd numbers)
 */

// ✅ Answer:
function countOdds(arr) {
    let count = 0;
    for (let num of arr) {
        if (num % 2 !== 0) {
            count++;
        }
    }
    return count;
}

// Test cases
console.log(countOdds([1, 2, 3, 4, 5]));    // 3
console.log(countOdds([2, 4, 6]));          // 0
console.log(countOdds([7, 9, 11, 13]));     // 4
console.log(countOdds([]));                // 0
