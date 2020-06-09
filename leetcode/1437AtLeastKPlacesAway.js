var kLengthApart = function(nums, k) {
  
  //holds index of last "1"
  let prevOneIndex = -k
  
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      const remainder = i - prevOneIndex
      console.log("prv", prevOneIndex)
      console.log("rmdr", remainder)
      if (remainder < k) {
        return false
      }
      prevOneIndex = i
    }
  }
  return true
}

