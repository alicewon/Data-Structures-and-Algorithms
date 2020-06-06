var countBattleships = function(board) {
    
  let shipCount = 0
  
  //loop over board, i = vertical, j = horizontal
  for (let i=0; i < board.length; i++) {
      for (let j=0; j < board[i].length; j++) {
          if (board[i][j] == "X") {
              shipCount ++
              
              //change board here: changing remaining X's of ship to periods:
              sink(board, i, j)
          }
      }
  }
  
  return shipCount
}

  function sink(board, i, j) {
      //check: if neighboring cell is an X
      if (i < 0 || i >= board.length || j < 0 || j >= board[i].length || board[i][j] != "X") {
          return 
      } else
      
      board[i][j] = "."
      sink(board, i +1, j)
      sink(board, i, j +1)
      
  }

// josh's answer:
//   var countBattleships = function(board) {
//     let numOfShips = 0
//     for(let i = 0; i< board.length; i++){
//         for(let j = 0; j < board[i].length; j++){
//             if (board[i][j] === 'X'){
//                 if (!hasBeenCounted(board, i, j)){
//                     numOfShips++
//                 }
//             }
//         }
//     }
//     return numOfShips
// };

// const hasBeenCounted = (board, i, j) => {
//     if (i > 0 && board[i-1][j] === 'X') return true
//     if (j > 0 && board[i][j-1] === 'X') return true 
//     return false 
// } 