// From LeetCode:
// https://leetcode.com/problems/sleep/

/**
 * Problem:
 * Write an asynchronous function that sleeps for `millis` milliseconds.
 * It should return a promise that resolves after the specified delay.
 * 
 * Example:
 * let t = Date.now();
 * sleep(100).then(() => {
 *   console.log(Date.now() - t); // ~100
 * });
 * 
 * Constraints:
 * 1 <= millis <= 1000
 */

// Answer:
async function sleep(millis) {
    return new Promise(resolve => setTimeout(resolve, millis));
}

// Example usage:
// let t = Date.now();
// sleep(100).then(() => console.log(Date.now() - t)); // ~100
