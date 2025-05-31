// From Practice Problem (LeetCode-style)

/**
 * Problem: Find Max
 * Write a function `findMax(arr)` that returns the largest number in the array.
 * 
 * Example:
 * findMax([1, 5, 3]);        // 5
 * findMax([-10, -3, -1]);    // -1
 * findMax([42]);             // 42
 * findMax([]);               // undefined
 * 
 * Constraints:
 * - Input is an array of numbers (positive or negative)
 * - Return undefined if the array is empty
 */

// ✅ Answer:
function findMax(arr) {
    if (arr.length === 0) return undefined;

    let max = arr[0];
    for (let num of arr) {
        if (num > max) {
            max = num;
        }
    }
    return max;
}

// Test cases
console.log(findMax([1, 5, 3]));        // 5
console.log(findMax([-10, -3, -1]));    // -1
console.log(findMax([42]));             // 42
console.log(findMax([]));               // undefined
