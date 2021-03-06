// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// my solution
function palindrome(str) {
    let reversed = str.split('').reduce((rev, char) => char + rev, '');
    return reversed === str
}

// instructor solution(s)
function palindrome(str) {
    let reversed = str.split('').reverse().join('');
    return reversed === str
}

// advanced, but not ideal because it runs the function more times than it needs to in order to complete the comparison
function palindrome(str) {
    str.split('').every((char, i) => {
        return char === str[str.length - i - 1];
    });
}