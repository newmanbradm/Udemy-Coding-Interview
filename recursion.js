

// Write a function to find the factorial of a given number (n)

function factorial(n) {
    // termination condition
    if (n < 0) {
        return;
    }
    // base case
    if (n === 0) {
        return 1;
    }
    // the recursion
    return n * factorial(n - 1);
}

factorial(4);
Result: 24