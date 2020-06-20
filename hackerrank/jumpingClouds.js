//mia
const jumpingOnClouds = arr => {
  let i = 0
  let jump = 0
  while ( i < arr.length - 1) {     // 
      if (arr[i+2] == 0){      // arr[2] == 0 no= 0 // arr[3 ]  ==
          i = i + 2
      }else {                // i =1
          i = i + 1      //  0 -> 0 -> 
      }
      jump ++       // jump = 1 
  }
  return jump 
}


//alice
const jumpingOnClouds = arr => {
  while (i < c.length-1) {
      if (i+2 == c.length || c[i+2] == 1) {
          i++
      } else {
          i += 2   
      }
      totalJumps++
  }
  return totalJumps
}


//sean
const jumpingOnClouds = arr => {
  let ans = 0
  for (let i = 0; i < c.length - 1; i++) {
      if (!c[i+2]) i++
      ans++
  }
  return ans
}

//sean2
const jumpingOnClouds = arr => {
  let ans = 0
  for (let i = 0; i < c.length - 1; i += (2 - c[i])) ans++
  return ans
}


// Josh 
const jumpingOnClouds = arr => {
  let jumps = 0;
  let i = 0;
  while (i < arr.length - 1) {
      if (arr[i + 2] === 0) i++;
      i++;
      jumps++;
  }
  return jumps;
};