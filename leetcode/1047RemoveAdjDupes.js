var removeDuplicates = function(st) {
  let stack = []
  
  for (let i=0; i< st.length; i++) {
    let char = stack[stack.length-1]
    if (stack.length == 0 || char != st[i]) {
      stack.push(st[i])
    } else {
      stack.pop()
    }
  }
  let finalString = stack.join('')
  return finalString
};

// "abbaca"
// "ca"