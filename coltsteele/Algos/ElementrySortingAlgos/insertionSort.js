// INSERTION SORT
// Great for Nearly Sorted arrays
// Great if new data is coming in and needs to be sorted (aka, live data)

// PSEUDOCODE:
// Pick the 2nd element in the array
// Compare the 2nd element with the one before it and swap if it is less than
// Continue to next element. If it is in the incorrect order, iterate through the sorted portion (left side) to place element in correct position
// Repeat until the array is sorted

function insertionSort(arr) {
    for (var i = 1; i < arr.length; i++) {
        var currentVal = arr[i]
       for(var j = i-1; j>=0 && arr[j] > currentVal; j--) {
         arr[j+1] = arr[j]
       }
       arr[j+1] = currentVal
    }
    return arr
}

insertionSort([2,1,9,76,36])