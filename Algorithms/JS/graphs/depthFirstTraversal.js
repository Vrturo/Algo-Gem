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


class Vertex {
  constructor( val ){
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

  addVertex( val ){
    if ( !this.vertices[val] ){
      var vertex = new Vertex( val );
      this.vertices[val] = vertex;
      this.totalVertices++;
    }
    else {
      return 'val exists';
    }
  }

  addEdge( valOne, valTwo ){
      var vertOne = this.vertices[valOne],
          vertTwo = this.vertices[valTwo];

      vertOne.edges[valTwo] = true;
      vertTwo.edges[valOne] = true;

      this.totalEdges++;
   }
}

var g = new Graph;
g.addVertex('A');
g.addVertex('B')
g.addVertex('C')
g.addVertex('D')
g.addVertex('E')
g.addVertex('F')
g.addVertex('G')
g.addEdge('A', 'B')
g.addEdge('A', 'C')
g.addEdge('D', 'B')
g.addEdge('D', 'C')
g.addEdge('D', 'E')
g.addEdge('D', 'F')
g.addEdge('D', 'G')
g.addEdge('F', 'G')

console.log(g);
