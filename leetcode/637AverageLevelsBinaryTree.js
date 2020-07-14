var averageOfLevels = function(root) {
  let q = [root], length, row, ans = []
  while (q.length > 0) {
      length = q.length
      row = 0
      for (let i = 0; i < length; i++) {
          node = q.shift()
          row += node.val
          if (node.left) q.push(node.left)
          if (node.right) q.push(node.right)
      }
      ans.push(row / length)
  }
  return ans
};