// Given a directed, acyclic graph of N nodes.  Find all possible paths from node 0 to node N-1, and return them in any order.

// The graph is given as follows:  the nodes are 0, 1, ..., graph.length - 1.  graph[i] is a list of all nodes j for which the edge (i, j) exists.

var allPathsSourceTarget = function(graph) {
  let result = []
  const findPaths = (index, path) => {
      avail = graph[index] // [1,2] at index 0
      if (index === graph.length - 1)
      for (let i = 0; i < avail.length; i++) {
          findPaths(avail[i], [...path, avail[i]])
      }
  }
  findPaths(0, [0])
  return result
};