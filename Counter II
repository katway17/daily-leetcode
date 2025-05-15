// From LeetCode:
// https://leetcode.com/problems/counter-ii/

/**
 * Problem:
 * Write a function createCounter that returns an object with three functions:
 * - increment() → adds 1 to the counter and returns it
 * - decrement() → subtracts 1 from the counter and returns it
 * - reset() → resets the counter to the initial value
 * 
 * Example:
 * const counter = createCounter(5);
 * counter.increment(); // 6
 * counter.reset();     // 5
 * counter.decrement(); // 4
 */

// ✅ Answer:
function createCounter(init) {
    let current = init;

    return {
        increment: () => ++current,
        decrement: () => --current,
        reset: () => {
            current = init;
            return current;
        }
    };
}
