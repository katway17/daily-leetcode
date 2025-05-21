// From Practice Problem (LeetCode-style)

/**
 * Problem: FizzBuzz
 * Write a function `fizzBuzz(n)` that prints numbers from 1 to n.
 * - If a number is divisible by 3, print "Fizz"
 * - If divisible by 5, print "Buzz"
 * - If divisible by both, print "FizzBuzz"
 * - Otherwise, print the number itself
 *
 * Example:
 * fizzBuzz(5);
 * Output:
 * 1
 * 2
 * Fizz
 * 4
 * Buzz
 *
 * Constraints:
 * - 1 <= n <= 100
 */

// ✅ Answer:
function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 15 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

// Example usage
fizzBuzz(15);
