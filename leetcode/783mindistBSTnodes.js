// to get to 15: 
// root.right.left.val

// breadth first search

//         1               1 
//      /   \            /  \
//     2     3          2    3
//      \   / \        / \  / \
//       4  5 6        4 5  6 7
//                    /\ /\ /\ /\
      

// [1] -> [X]+[2,3] -> [2,3]
// [2] -> [X,3]+[4,5] -> [3,4,5]
// [3] -> [X,4,5]+[6,7] -> [4,5,6,7]
// [4] -> [X,5,6,7]+[] -> [5,6,7]
// [5] -> [X,6,7]+[] -> [6,7]

// boilerplate for BFS:

// let q = [root]
// while (q.length > 0) {
//     node = q.shift()
//     if (node.left) q.push(node.left)
//     if (node.right) q.push(node.right)
// }


// boilerplate for BFS with rows:

// let q = [root], length
// while (q.length > 0) {
//     length = q.length
//     for (let i = 0; i < length; i++) {
//         node = q.shift()
//         if (node.left) q.push(node.left)
//         if (node.right) q.push(node.right)
//     }
// } 

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


const minDiffInBST = (root) => {
    let last = -Infinity, min = Infinity
    const trav = node => {
        if (min == 1 || !node) return
        trav(node.left)
        min = Math.min(min, node.val - last)
        last = node.val
        trav(node.right)
    }
    trav(root)
    return min
}