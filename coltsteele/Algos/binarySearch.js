// BINARY SEARCH
// Works for SORTED arrays

// PSEUDOCODE:
// Accepts sorted array and a value
// Create left pointer variable at the start of the array, and right pointer variable at end of array
// While the left pointer comes before the right pointer,
        // Create a pointer in the middle
        // If you find the value, return the index
        // If value is too small, move left pointer up
        // If value is too large, move right pointer down
// If you never find the value, return -1

function binarySearch(arr, elem) {

    var start = 0
    var end = arr.length-1
    var middle = Math.floor((start + end) / 2)

    while (arr[middle] != elem && start <= end) {
        if (elem < arr[middle]) end = middle-1
        else start = middle +1
        middle = Math.floor((start+end) /2 )
    }
    return arr[middle] === elem ? middle : -1
   
}

binarySearch([2,5,6,9,13,15,28], 15)