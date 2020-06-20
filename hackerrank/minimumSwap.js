//sean
function minimumSwaps(a) {
  let n = a.length, l = {}
  for (let i = 0; i < a.length; i++) {
      l[a[i]] = a[a[i]-1]
      while (l[l[a[i]]] && l[a[i]] !== a[i]) l[a[i]] = l[l[a[i]]]
      l[l[a[i]]] && n--
  }
  return n
}


//josh 
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


//tanner
function minimumSwaps(arr) {
  const arLength = arr.length
  let sCount = 0;
  let temp = 0
  for(let i=0; i<arLength; i++){
      while(arr[i] != i+1){
          temp = arr[i];          
          arr[i] = arr[temp-1];
          arr[temp-1] = temp;  
          sCount+=1;
      }
  }
  return sCount;
}