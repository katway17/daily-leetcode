// From Practice Problem (LeetCode-style)

/**
 * Problem: Sum Up To
 * Write a function `sumUpTo(n)` that returns the sum of all integers from 1 to n.
 * You must use a loop to calculate the result.
 * 
 * Example:
 * sumUpTo(5); // 15 → 1 + 2 + 3 + 4 + 5
 * sumUpTo(1); // 1
 * sumUpTo(0); // 0
 * 
 * Constraints:
 * - Input n is a non-negative integer (0 or greater)
 * - Must use a loop (not math formula)
 */

// ✅ Answer:
function sumUpTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

// Test cases
console.log(sumUpTo(5)); // 15
console.log(sumUpTo(1)); // 1
console.log(sumUpTo(0)); // 0
