function powerSum(X, N) {
  let arr = [], ans = 0
  // build our array of max available powered nums
  for (let i=1; i**N <= X; i++) arr.push(i**N)
  // define the recursive function
  const rc = (rem, avail) => {
      // if we hit 0 remaining, we've found a solution
      if (rem === 0) ans++
      // or if we still have remaining space, keep trying
      else if (rem > 0) {
          // go through available nums in reverse order,
          // and try each combination
          for (let j = avail.length - 1; j >= 0; j--) {
              // new remaining is difference of old rem and picked num
              // new avail is any number smaller than picked num
              rc(rem - avail[j], avail.slice(0,j))
          }
      }
  }
  rc(X, arr) // base case with max rem and max avail
  return ans
}