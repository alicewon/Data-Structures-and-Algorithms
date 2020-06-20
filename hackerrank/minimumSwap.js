function minimumSwaps(arr) {
  let obj = {}
  let count = 0 
  while(Object.values(obj).length !== arr.length){
    count = check(arr, obj, count)
  } 
  return count
}

function check(arr, obj, count){
  arr.map((num, idx) => {
    if(num !== idx + 1){
      arr[idx] = arr[num-1] 
      arr[num-1] = num 
      count++
      obj[num-1] = true
    } else {
      obj[idx] = true 
    }
  })
  return count
}