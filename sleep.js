/**
 * @param {number} millis
 * @return {Promise}
 */
// https://leetcode.com/problems/sleep/description/

// This function is called `sleep` and takes one argument, `millis`.
// The argument represents the number of milliseconds to sleep before resolving the Promise.
async function sleep(millis) {
    // This line returns a new Promise, which is a way to create an asynchronous operation in JavaScript.
    // The Promise takes two functions as arguments: `resolve` and `reject`.
    // These functions are used to signal the completion or failure of the asynchronous operation.
    return new Promise((resolve, reject) => {
        // This line sets a timer using the `setTimeout` function, which is a built-in JavaScript function for scheduling the execution of a function after a specified delay.
        // The delay is set to the value of the `millis` argument passed to the `sleep` function.
        setTimeout(() => {
            // This line resolves the Promise after the specified delay.
            resolve();
        }, millis);
    });
}

// This line gets the current time in milliseconds since the Unix Epoch (January 1, 1970) using the `Date.now()` method.
let t = Date.now();

// This line calls the `sleep` function with an argument of `100`, which means the Promise will resolve after 100 milliseconds.
// The `then` method is called on the returned Promise, which is a way to specify a function to be called when the Promise is resolved.
sleep(100).then(() => {
    // This line logs the difference between the current time and the time when the `sleep` function was called.
    console.log(Date.now() - t);
});