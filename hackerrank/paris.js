function pairs(k, arr) {
    
  let count = 0
  for (let i=0; i< arr.length-1; i++) {
      let j=i+1
      while (j < arr.length) {
          if (Math.abs(arr[j] - arr[i]) == k) count++
          j++
      }
  }
  return count
}