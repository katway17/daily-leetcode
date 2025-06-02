// From Practice Problem (LeetCode-style)

/**
 * Problem: Capitalize Words
 * Write a function `capitalizeWords(arr)` that takes an array of words and returns
 * a new array where each word is capitalized (first letter uppercase, rest lowercase).
 * 
 * Example:
 * capitalizeWords(["hello", "world"]);        // ["Hello", "World"]
 * capitalizeWords(["javaScript", "rocks"]);   // ["Javascript", "Rocks"]
 * capitalizeWords(["a", "b", "c"]);            // ["A", "B", "C"]
 * 
 * Constraints:
 * - Input is an array of strings
 * - Return a new array without modifying the original
 */

// ✅ Answer:
function capitalizeWords(arr) {
    return arr.map(word => {
        return word[0].toUpperCase() + word.slice(1).toLowerCase();
    });
}

// Test cases
console.log(capitalizeWords(["hello", "world"]));       // ["Hello", "World"]
console.log(capitalizeWords(["javaScript", "rocks"]));  // ["Javascript", "Rocks"]
console.log(capitalizeWords(["a", "b", "c"]));           // ["A", "B", "C"]
