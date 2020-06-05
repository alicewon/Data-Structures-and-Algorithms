let candles = [1,4,2,3,3,]

function blow(candles) {
//   let tallest = Math.max.apply(Math, candles)
//   return tallest
   let tallCandles = 0
   let maxHeight = Math.max.apply(Math, candles)
   
  for (let i=0; i <= candles.length; i++){ 
    if (candles[i] === maxHeight) {
      tallCandles++
    } 
  }
  return tallCandles
}

blow(candles)