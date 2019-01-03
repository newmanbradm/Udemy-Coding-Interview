// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// my solution and instructor solution
function maxChar(str) {
    const charCount = {};
    let max = 0
    let maxChar = ''

    for (let char of str) {
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }
    for (let char in charCount) {
        if (charCount[char] > max) {
            max = charCount[char]
            maxChar = char
        }
    }
    return maxChar
}