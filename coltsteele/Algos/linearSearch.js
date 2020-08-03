// LINEAR SEARCH


// PSEUDOCODE:
// Accepts an array and a value
// Loop through array and check if the current array element is equal to the value
// If it is, return the index at which the element is found
// If the value is never found, return -1

function linearSearch(arr, val) {
    for(var i = 0; i < arr.length; i++) {
        if (arr[i] === val) return i
    } 
    return -1
}

linearSearch([2,5,34,1,7], 1)