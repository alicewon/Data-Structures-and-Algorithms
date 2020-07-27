const fibionacci = n => {
  if (n === 0) return 0
  let ans = 1, count = 1
  const rc = (last, sec) => {
      if (count === n) return
      count++
      let next = last + sec
      ans = next
      rc(next, last)
  }
  rc(1, 0)
  return ans
}