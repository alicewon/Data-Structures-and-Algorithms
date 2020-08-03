// NAIVE STRING

// PSEUDOCODE:
// Loop over longer string
// Loop over shorter string
// If characters don't match, break out of inner loop
// If characters do match, keep going
// If you complete the inner loop and find a match, increment count of matches
// Return the count

function naiveSearch(long, short) {
    let count = 0
    for (let i = 0; i < long.length; i++) {
        for (let j = 0; j < short.length; j++) {
            if (short[j] !== long[i +j]) {
                break
            }
            if (j === short.length -1) {
                count++
            }
    }
    return count
}
}
naiveSearch("lorie loled", "lol")