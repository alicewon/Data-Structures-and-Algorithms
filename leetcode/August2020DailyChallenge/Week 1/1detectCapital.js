var detectCapitalUse = function(word) {

    
    // change isCapital to TRUE if:
    // all letters capital
    // all letters lowercase
    // first letter is capital, the rest are lowercase
    
    
    
    if (word == word.toUpperCase() || word == word.toLowerCase()) {
        return true
    }
    
    if (word[0] == word[0].toUpperCase() && 
        word.slice(1, word.length) == word.slice(1, word.length).toLowerCase()) {
        
        return true
    }
        return false
};

// Google
// GooGle
// GOOGLE
// google
// gOOGLE