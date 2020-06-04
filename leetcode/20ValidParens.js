var isValid = function(s) {
  // if array is balanced, return true
  // else, return false
  
  if (s.length %2 != 0) return false

let stack = []
for (let i=0; i< s.length; i++) {
  let char = stack[stack.length-1]
  if (s[i] == "(" || s[i] == "{" || s[i] == "[") {
    stack.push(s[i])
  } else if (
    (char == "(" && s[i] == ")") || 
    (char == "{" && s[i] == "}") ||
    (char == "[" && s[i] == "]")) {
    stack.pop()
  } else return false
}
return stack.length ? false : true
};

// DSA group answer
// let s = "([])(("
// let stack = []
// let open = "([{"

// var isValid = function(s) {
//     if (s.length % 2 === 1) return false
//     for(char of s){
//         if (open.includes(char)) {
//             stack.push(char) 
//             console.log('push', char)
//         } else {
//             if (!stack) return false
//             // if (stack.length === 0) return false 
//             let toMatch = stack.pop()
//             console.log('comparing', toMatch, char)
//             if (toMatch == "(" && char !== ")") return false 
//             if (toMatch == "[" && char !== "]") return false 
//             if (toMatch == "{" && char !== "}") return false 
//         }
//     }
//         console.log('remaining stack', stack)
//         return !stack.length
// };


//Sean answer
// var isValid = function(s) {
//   let h = []
//   for (c of s) {
//       if ('({['.includes(c)) {
//           h.push(c)
//       } else if (h.length < 1 || Math.abs(c.charCodeAt(0) - h.pop().charCodeAt(0)) > 2) {
//           return false
//       }
//   }
//   return !h.length
// };



//Josh answer
