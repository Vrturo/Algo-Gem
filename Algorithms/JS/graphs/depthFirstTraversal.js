/*
 *      Using a stack and while loop, write a function that takes in a graph and
 *      outputs an array of values from vertex A outwards ordered by DEPTH
 *      FIRST traversal.
 *
 *      Input: Graph
 *      Output: Array
 *
 *  NOTE: You may use an array or linked list for your stack.
 *
 *  HINT: Use a hash table to handle redundancy
 */

// ------------ Constructors for Graph and Vertex ----------------------

class Vertex {
  constructor(val){
    this.value = val;
    this.edges = {};
  }
}

class Graph {
  constructor(){
    this.vertices = {};
    this.totalVertices = 0;
    this.totalEdges = 0;
  }

  addVertex(val) {
    if (!this.vertices[val]) {
      const vertex = new Vertex(val);
      this.vertices[val] = vertex;
      this.totalVertices += 1;
    } else {
      return 'val exists';
    }
  }

  addEdge(valOne, valTwo) {
    if (this.vertices[valOne] && this.vertices[valTwo]) {
      const vertOne = this.vertices[valOne];
      const vertTwo = this.vertices[valTwo];

      vertOne.edges[valTwo] = vertTwo;

      this.totalEdges += 1;
    } else {
      return 'edges dont exist';
    }
  }

}
// ex 1

// var g = new Graph;
// g.addVertex('A');
// g.addVertex('B')
// g.addVertex('C')
// g.addVertex('D')
// g.addVertex('E')
// g.addVertex('F')
// g.addVertex('G')
// g.addEdge('A', 'B')
// g.addEdge('A', 'C')
// g.addEdge('B', 'D')
// g.addEdge('B', 'E')
// g.addEdge('C', 'E')
// g.addEdge('D', 'E')
// g.addEdge('D', 'F')
// g.addEdge('E', 'F')

// console.log(g);

// ex 2

var g = new Graph;
g.addVertex(0);
g.addVertex(1);
g.addVertex(2);
g.addVertex(3);
g.addVertex(4);
g.addEdge(1, 0);
g.addEdge(0, 2);
g.addEdge(2, 1);
g.addEdge(0, 3);
g.addEdge(1, 4);

// console.log(g);

// ex 3

// var g = new Graph;
// g.addVertex(0);
// g.addVertex(1);
// g.addVertex(2);
// g.addVertex(3);
// g.addVertex(4);
// g.addEdge(0, 3);
// g.addEdge(0, 2);
// g.addEdge(1, 0);
// g.addEdge(2, 1);
// g.addEdge(3, 4);
// g.addEdge(4, 0);

// console.log(g);

// ------ end Classes -----------------------------

// SOLUTIONS

// Recursive Approach

function recursiveDFT(graph){
  const visited = {};
  const firstVertex = graph.vertices[0];
  const result = [];

  function helper(v) {
    visited[v.value] = true;
    result.push(v.value);
    for (const k in v.edges) {
      if (!visited[k]) helper(graph.vertices[k], visited);
    }
  }

  helper(firstVertex);
  return result;
}

console.log(recursiveDFT(g));
// ------------------------------------------------------

// Iterative Approach

// create visited hash t ostore vertices we've visited
// grab first vertex from graph to start our traversal
// create a stack to push our vertices' edges
// create a results array to return our values in the end
// store first vertex value in visited array
// once visited, push into stack
// create a while loop that breaks once stack is empty
  // pop last vertex in our stack and set is as current Vertex
  // push current vertex into result array
  // loop through vurrent vertex edges
    // if vertex hasnt been visited
      // set vertex as visited
      // push into stack
// return result array with ordered vertices

function iterativeDFT(graph) {
  const visited = {};
  const firstVertex = graph.vertices[0];
  const stack = [];
  const result = [];

  visited[firstVertex.value] = true;
  stack.push(firstVertex);

  while (stack.length) {
    const currentV = stack.pop();
    result.push(currentV.value);

    for (const k in currentV.edges) {
      if (!visited[k]) {
        visited[k] = true;
        stack.push(graph.vertices[k]);
      }
    }
  }

  return result;
}

console.log(iterativeDFT(g));
