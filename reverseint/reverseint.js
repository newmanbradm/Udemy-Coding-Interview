// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// my solution
function reverseInt(n) {
    // Math.sign(n) will either be 1 for pos, 0 for 0, or -1 for neg
    if (Math.sign(n) >= 0) {
        return parseInt(n.toString().split('').reverse().join(''))
    } else {
        let pos = n * (-1)
        return parseInt(pos.toString().split('').reverse().join('')) * (-1)
    }
}