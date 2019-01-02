// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


// my solution
function reverse(str) {
    let newStr = '';
    for (let char of str) {
        newStr = char + newStr
    };
    return newStr;
}

// instructor solution(s)
function reverse(str) {
    return str.split('').reverse().join('');
}

function reverse(str) {
    let reversed = '';
    for (let char of str) {
        reversed = char + reversed
    };
    return reversed;
}