// From Practice Problem (LeetCode-style)

/**
 * Problem: Sum Array
 * Write a function `sumArray(arr)` that returns the sum of all numbers in the array.
 * 
 * Example:
 * sumArray([1, 2, 3]);        // 6
 * sumArray([10, -5, 7]);      // 12
 * sumArray([]);               // 0
 * sumArray([100]);            // 100
 * 
 * Constraints:
 * - Input is always an array of numbers
 * - Return 0 if the array is empty
 */

// ✅ Answer:
function sumArray(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    return sum;
}

// Test cases
console.log(sumArray([1, 2, 3]));       // 6
console.log(sumArray([10, -5, 7]));     // 12
console.log(sumArray([]));             // 0
console.log(sumArray([100]));          // 100
