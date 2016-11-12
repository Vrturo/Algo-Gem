/*
 *     For the example graph below, what is the expected output if we printed each
 *     vertex value from vertex A outwards using:
 *
 *     a. BREADTH FIRST traversal?
 *
 *     NOTE: Assume the order of edges will be alphabetical. E.g., Vertex D has edges to
 *           5 vertices in the following order: B, C, E, F, G
 *
 *     NOTE: The traversal should take care of redundancy and not print the same vertex
 *           value twice.
 *
 *     Example Graph:
 *
 *              B     E
 *            /   \  /
 *          A       D  --- F
 *            \   /   \   /
 *              C       G
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

// console.log(g);

function BFT(graph){
  var visited = {},
      firstVertex = graph.vertices[Object.keys(graph.vertices)[0]],
      q = [],
      results = [];

  q.push( firstVertex );
  results.push( firstVertex.value );
  visited[ firstVertex.value ] = true;

  while( q.length ){
    var currentVertex = q[0];

    for( var k in currentVertex.edges ){
      if( !visited[k] ){
        visited[k] = true;
        q.push(graph.vertices[k]);
        results.push(k);
      }
    }

    q.shift();
  }
  return results;
}

console.log( BFT(g) )





