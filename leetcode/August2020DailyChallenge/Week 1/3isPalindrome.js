

var isPalindrome = function(s) {
    // clean out punctuation and spaces
    // split at spaces
    // join, save to new var
    // reverse array (destructive, so save to new variable)
    // if reversedString === string, return true, else return false

var regex = /[\s!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
    let cleaned = s.replace(regex, '');
    let cleanSplit = cleaned.split('')
    let rev = cleanSplit.reverse()
    
    if (rev.join('').toLowerCase() == cleaned.toLowerCase()) {
        return true
    } else return false


};


// // #1
// var isPalindrome = function(s) {
//     s = s.toLowerCase().replace(/[^a-z0-9]/gi,'');
//     for (let i = 0, j = s.length - 1; i <= j; i++, j--) {
//       if (s.charAt(i) !== s.charAt(j)) return false;
//     }
//     return true;
//   };


//   // #2
//   var isPalindrome = function(s) {
//     const regex = /[^0-9a-zA-Z]/g
//     const r = s.replace(regex, '').toLowerCase()
//     let i = 0, j = r.length - 1
    
//     while (i < j) {
//       if (r[i] !== r[j]) return false
//       i++
//       j--
//     }
    
//     return true
//   };