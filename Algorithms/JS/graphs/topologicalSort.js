// Topological sorting for Directed Acyclic Graph (DAG) is a linear ordering of vertices such that for every directed edge uv,
// (undirected vertex) vertex u comes before v in the ordering.
// Topological Sorting for a graph is not possible if the graph is not a DAG.

// For example, a topological sorting of the following graph is “5 4 2 3 1 0”.
// There can be more than one topological sorting for a graph.
// For example, another topological sorting of the following graph is “4 5 2 3 1 0”.
// The first vertex in topological sorting is always a vertex with in-degree as 0 (a vertex with no in-coming edges).

// Topological Sorting vs Depth First Traversal (DFS):

// In DFS, we print a vertex and then recursively call DFS for its adjacent vertices.
// In topological sorting, we need to print a vertex before its adjacent vertices.
// For example, in the given graph, the vertex ‘5’ should be printed before vertex ‘0’,
// but unlike DFS, the vertex ‘4’ should also be printed before vertex ‘0’.
// So Topological sorting is different from DFS. For example, a DFS of the above graph is “5 2 3 1 0 4”,
// but it is not a topological sorting,

// Algorithm to find Topological Sorting:

// We recommend to first see implementation of DFS. We can modify DFS to find Topological Sorting of a graph.
// In DFS, we start from a vertex, we first print it and then recursively call DFS for its adjacent vertices.
// In topological sorting, we use a temporary stack. We don’t print the vertex immediately,
// we first recursively call topological sorting for all its adjacent vertices, then push it to a stack.
// Finally, print contents of stack. Note that a vertex is pushed to stack only when all of its adjacent vertices
// (and their adjacent vertices and so on) are already in stack.


// function topologicalSort(g){
//   var result = [],
//       visited = {},
//       stack = [];

//   function helper(v) {
//     visited[v] = true;
//     var edges = g.vertices[v];
//     for (var i = 0; i < edges.length; i += 1) {
//       if (!visited[edges[i]]) helper(edges[i]);
//     }
//     stack.push(v);
//   }

//   for (var k in g.vertices) { // loop through graph vertices
//     if (!visited[k]) helper(k);
//   }

//   while (stack.length) { // return stack in reverse
//     result.push(stack.pop());
//   }
//   return result;
// }

// function topologicalSort(g){
//   var result = [],
//       visited = {},
//       stack = [];

//   function helper(v) {
//     visited[v] = true;
//     var edges = g.vertices[v];
//     for (var i = 0; i < edges.length; i += 1) {
//       if (!visited[edges[i]]) helper(edges[i]);
//     }
//     result.push(v);
//   }

//   for (var k in g.vertices) { // loop through graph vertices
//     if (!visited[k]) helper(k);
//   }

//   return result;
// }



// Adjacency List constructor

class Graph{
  constructor() {
    this.vertices = {};
    this.totalVertices = 0;
    this.totalEdges = 0;
  }

  addVertex(val) {
    if (!this.vertices[val]) { // no duplicates
      this.vertices[val] = []; // storage
      this.totalVertices++;
    }
  }

  removeVertex(val) {
    delete this.vertices[val];
    this.totalVertices--;
  }

  addEdge(valOne, valTwo) {
    this.vertices[valOne].push(valTwo);
    this.vertices[valTwo].push(valOne);

    this.totalEdges++;
   }

   removeEdge(valOne, valTwo) {
    this.vertices[valOne].splice(this.vertices[valOne].indexOf(valTwo), 1);
    this.vertices[valTwo].splice(this.vertices[valTwo].indexOf(valOne), 1);

    this.totalEdges--;
  }

  getVertex(val) {
    return this.vertices[val] ? this.vertices[val] : 'val not found';
  }

  getNeighbors(val) {
    return this.vertices[val] ? this.vertices[val] : 'val doesnt exist';
  }

}

var graph = new Graph;
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');
graph.addVertex('G');

graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('A', 'B');
graph.addEdge('B', 'E');
graph.addEdge('C', 'F');
graph.addEdge('D', 'G');
graph.addEdge('F', 'G');
graph.addEdge('F', 'E');


console.log(graph)
console.log(topologicalSort(graph))

var graph = new Graph;
graph.addVertex(0)
graph.addVertex(1)
graph.addVertex(2)
graph.addVertex(3)
graph.addVertex(4)
graph.addVertex(5)

graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(1, 3);
graph.addEdge(2, 3);
graph.addEdge(2, 4);
graph.addEdge(2, 5);

// without using a stack

function topologicalSort(g){
  var result = [],
      visited = {};

  function helper(v) {
    visited[v] = true;
    var edges = g.vertices[v];
    for (var i = 0; i < edges.length; i += 1) {
      if (!visited[edges[i]]) helper(edges[i]);
    }
    result.push(v);
  }

  for (var k in g.vertices) { // loop through graph vertices
    if (!visited[k]) helper(k);
  }

  return result;
}

console.log(topologicalSort(graph))
