let candles = [1,4,2,3,3,]

function birthdayCakeCandles(candles) {
  // 1. Initialize tall candle count:
  let tallCandles = 0

  // 2. Find the tallest candle height:
  let maxHeight = Math.max(...candles)
  // SAME THING AS: let maxHeight = Math.max.apply(Math, candles)

  // 3. Iterate over array and increase tallCandles counter when candle matches maxHeight
  for (let i=0; i <= candles.length; i++){ 
    if (candles[i] === maxHeight) {
      tallCandles++
    } 
  }
  // 4. Return tall candle count
  return tallCandles
}

birthdayCakeCandles(candles)

function birthdayCakeCandles(candles){
  // 1. Find the tallest candle height:
  let tallestCandleHeight = Math.max(...candles) 

  //2. Return the length of the array where we filtered out any heights that don't match the tallest candle height:
  return candles.filter((candleHeight) => tallestCandleHeight === candleHeight).length
}