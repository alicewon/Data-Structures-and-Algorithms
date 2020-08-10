//similar to Bubble Sort,but places smaller numbers at the beginning
//testing

// Pseudocode:

// - store first element as smallest value yo've seen
// - compare this item to the next item in the array until you find a smaller number
// - if a smaller number is found, that is the new minimum, and continue to the end of the array
// - if min is not the value (index) you started with, SWAP the two values
// - repeat this with the NEXT element (after the one you started with)

function selectionSort(arr) {
    for(let i = 0; i< arr.length; i++) {
        let lowest = i
        for (let j = i+1; j < arr.length; j++){
            if (arr[j] < arr[lowest]) {
                lowest = j
            }
        }
        if (i!== lowest) {
            var temp = arr[i]
            arr[i] = arr[lowest]
            arr[lowest] = temp
        }
    }
    return arr
}

selectionSort([34, 22, 10, 19, 17])