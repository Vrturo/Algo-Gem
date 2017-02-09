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
      vertTwo.edges[valOne] = vertOne;

      this.totalEdges += 1;
    } else {
      return 'edges dont exist';
    }
  }

}

var g = new Graph;
// g.addVertex('A');
// g.addVertex('B')
// g.addVertex('C')
// g.addVertex('D')
// g.addVertex('E')
// g.addVertex('F')
// g.addVertex('G')
// g.addEdge('A', 'B')
// g.addEdge('A', 'C')
// g.addEdge('D', 'B')
// g.addEdge('D', 'C')
// g.addEdge('D', 'E')
// g.addEdge('D', 'F')
// g.addEdge('D', 'G')
// g.addEdge('F', 'G')
var g = new Graph;
g.addVertex(0);
g.addVertex(1);
g.addVertex(2);
g.addVertex(3);
g.addVertex(4);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 2);
g.addEdge(2, 0);
g.addEdge(2, 3);
g.addEdge(3, 3);
// console.log(g);


// ------ end Classes -----------------------------

// Solutions

function DFT(graph){
  var visited = {},
      firstVertex = graph.vertices[Object.keys(graph.vertices)[0]],
      result = [];

  function helper(v, check) {
    check[v.value] = true;
    result.push(v.value);
    for (var k in v.edges) {
      if (!check[k]) helper(graph.vertices[k], check);
    }
  }

  helper(firstVertex, visited)
  return result;
}

console.log(DFT(g));
