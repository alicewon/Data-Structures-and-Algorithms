function bubbleSort(arr) {
    for(let i = arr.length; i > 0; i--) {
        noSwaps = true
        for (let j = 0; j < i-1; j++) {
            if(arr[j] > arr[j+1]) {
                //swapping here
                var temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
                noSwaps = false
            }
        }
        if(noSwaps) break
    }

    return arr

}

bubbleSort([37,45,29,8])