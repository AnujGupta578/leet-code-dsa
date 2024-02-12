/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function (n) {
    return function () {
        const ans = n++;
        console.log(ans);
        return ans;

    };
};

const counter = createCounter(10)
counter()
counter()
counter()


// This code defines a function called createCounter which takes one argument, n. The function createCounter returns function which increments
// and returns the value of n each time it is called.

// Here's a breakdown of what the code does:

// A function called createCounter defined, which takes one argument, n.
// The function createCounter returns another function, which has no named parameters and is defined with the keyword function.
// The returned function increments and returns the value of n each time it is called, by using the ++ operator after referencing n.
// The value of n is then closed over by the returned function, allowing it to be incremented and retained between calls.
// An example usage of this code is shown following the definition of createCounter. A counter is created by calling createCounter(10),
// and then the counter is invoked three times with the counter() syntax. Each time the counter is invoked, it returns an incremented value,
// starting from 10 and increasing to 11, 12, and 13.The createCounter function is a higher-order function, which means it takes a function as an
// argument or returns a function as a result. In this case, it returns a function that increments and returns a counter value.

// The createCounter function takes one argument, n, which is the initial value of the counter. When createCounter is called with an argument,
//  it returns a new function that increments and returns the value of n each time it is called.

// The returned function is defined using an anonymous function expression. It has no named parameters, but it does reference the n
// variable from the outer scope. This is possible because the returned function is a closure, which means it can access and modify
// variables from its outer scope even after the outer function has finished executing.

// In the example usage, createCounter(10) is called to create a counter that starts at 10. The counter() syntax is then used to
//  invoke the counter three times. Each time the counter is invoked, it returns the current value of n and then increments it by 1.

// Here's the code again with comments to explain each part:

// javascript
// Copy code
// /**
//  * @param {number} n
//  * @return {Function} counter
//  */
// var createCounter = function (n) {
//     // Return a new function that increments and returns the value of `n` each time it is called.
//     return function () {
//         // Increment and return the value of `n`.
//         return n++;
//     };
// };

// const counter = createCounter(10) // Create a counter that starts at 10.
// counter() // Increment the counter and return 10.
// counter() // Increment the counter and return 11.
// counter() // Increment the counter and return 12.
// ```ef{artikel}{Higher-order function}{https://developer.mozilla.org/-US/docs/Glossary/Higher-orderfunction}

// {artikel}{Closure (computer programming)}{<https://en.wikipedia.org/wiki/Closurecomputerprogramming)>}


// The time complexity of the given code is O(1) because the function createCounter returns another function that increments and logs the value of
// n each time it is called, but the number of operations does not increase with the size of the input, which is n. Therefore, the time complexity
// remains constant, regardless of the size of n.

// The space complexity of the given code is also O(1) because the function createCounter only creates one new variable n and one
// new function. The space complexity does not increase with the size of the input n. Therefore, the space complexity remains constant,
// regardless of the size of n.

// Note: The space complexity of a function refers to the amount of memory it requires to execute, including the memory needed for
// its local variables and any functions it may call. In this case, the space complexity is O(1) because the function does not require
// any additional memory for each call beyond the initial memory required to create the function and its variables.


