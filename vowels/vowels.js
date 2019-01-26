// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// my solution
function vowels(str) {
    let counter = 0;
    let vowelArr = ['a', 'e', 'i', 'o', 'u']
    for (let char of str.toLowerCase()) {
        if (vowelArr.includes(char)) {
            counter += 1;
        }
    }
    return counter;
}

// instructors iterative solution
function vowels(str) {
    let count = 0;
    const checker = 'aeiou';

    for (let char of str.toLowerCase()) {
        if (checker.includes(char)) {
            count++;
        }
    }

    return count;
}