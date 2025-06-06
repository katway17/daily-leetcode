// From LeetCode:
// https://leetcode.com/problems/counter/description/

/**
 * Given an integer n, return a counter function. This counter function 
 * initially returns n and then returns 1 more than the previous value 
 * every subsequent time it is called (n, n + 1, n + 2, etc).
 * 
 * Example 1:
 * Input: 
 *   n = 10 
 *   ["call","call","call"]
 * Output: 
 *   [10,11,12]
 * 
 * Example 2:
 * Input: 
 *   n = -2
 *   ["call","call","call","call","call"]
 * Output: 
 *   [-2,-1,0,1,2]
 * 
 * Constraints:
 * -1000 <= n <= 1000
 * 0 <= calls.length <= 1000
 * calls[i] === "call"
 */

// ✅ My Answer:
var createCounter = function(n) {
    return function() {
        return n++; // closure remembers `n`, and returns then increments it. 
    };
};

// Example usage:
// const counter = createCounter(10);
// counter(); // 10
// counter(); // 11
// counter(); // 12

