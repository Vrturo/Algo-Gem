// Build a graph using an adjacency list.
// No vertex class
// Should have a storage property that holds vertex id along with all the edges.

// Methods:
// addVertex
// removeVertex
// addEdge
// removeEdge
// neighbors(vertex) -> return the array of neighbors for a vertex


class Graph{
  constructor(){
    this.vertices = {};
    this.totalVertices = 0;
    this.totalEdges = 0;
  }

  addVertex(val){
    if (!this.vertices[val]){ // no duplicates
      this.vertices[val] = []; // storage
      this.totalVertices++;
    }
  }

  removeVertex(val){
    delete this.vertices[val];
    this.totalVertices--;
  }

  addEdge(valOne, valTwo){
    this.vertices[valOne].push(valTwo);
    this.vertices[valTwo].push(valOne); //

    this.totalEdges++;
   }

   removeEdge(valOne, valTwo){
    this.vertices[valOne].splice( this.vertices[valOne].indexOf(valTwo), 1 );
    this.vertices[valTwo].splice( this.vertices[valTwo].indexOf(valOne), 1 );

    this.totalEdges--;
  }

  getVertex( val ){
    if ( this.vertices[val] ){
      return this.vertices[val]
    }
    else {
      return 'val not found';
    }
  }

  getNeighbors(val){
    if( this.vertices[val] ){
      return this.vertices[val]
    } else {
      return 'val doesnt exist';
    }
  }

}

// var graph = new Graph;
// var myVertices = ['A','B','C','D','E','F','G','H','I', 'A']; // 9
// for( var i=0; i<myVertices.length; i++ ){
//   graph.addVertex( myVertices[i] );
// }
// graph.addEdge('A', 'B');
// graph.addEdge('A', 'C');
// graph.addEdge('A', 'D');
// graph.addEdge('C', 'D');
// graph.addEdge('C', 'G');
// graph.addEdge('D', 'G');
// graph.addEdge('D', 'H');
// graph.addEdge('B', 'E');
// graph.addEdge('B', 'F');
// graph.addEdge('E', 'I');
// console.log(graph)
// console.log(graph.getNeighbors('A'))
// console.log(graph.getNeighbors('B'))
// graph.removeEdge('A', 'B')
// console.log(graph.getNeighbors('A'))
// console.log(graph.getNeighbors('B'))
// graph.removeVertex('A')
// console.log(graph.getNeighbors('A'))


function breadthFirstTraverse(g){
  var result = [],
      q = [],
      firstV = Object.keys(g.vertices)[0],
      visited = {};

  q.push(firstV);
  result.push(firstV);
  visited[firstV] = true;

  while( q.length ){
    var curr = q.shift(),
        neighbors = g.getNeighbors(curr);

    for( var i=0; i<neighbors.length; i++ ){
      if( !visited[neighbors[i]] ){
        visited[neighbors[i]] = true;
        q.push(neighbors[i]);
        result.push(neighbors[i]);
      }
    }

  }

  return result;
}

// console.log( breadthFirstTraverse(graph) );

function depthFirstTraversal(g){
  var result = [],
      firstV = Object.keys(g.vertices)[0],
      visited = {},
      stack = [];

  result.push(firstV);
  stack.push(firstV);
  visited[firstV] = true;

  while( stack.length ){
    var curr = stack.pop(),
        neighbors = g.getNeighbors(curr);

    for( var i=0; i<neighbors.length; i++ ){
      if( !visited[neighbors[i]] ){
        visited[neighbors[i]] = true;
        stack.push(neighbors[i]);
        result.push(neighbors[i]);
      }
    }
  }

  return result;
}

// console.log(depthFirstTraversal(graph))

function topologicalSort(g){
  var result = [],
      visited = {},
      stack = [];

  function helper(v) {
    visited[v] = true;
    var edges = g.vertices[v];
    for (var i = 0; i < edges.length; i += 1) {
      if (!visited[edges[i]]) helper(edges[i]);
    }
    stack.push(v);
  }

  for (var k in g.vertices) { // loop through graph vertices
    if (!visited[k]) helper(k);
  }

  while (stack.length) { // return stack in reverse
    result.push(stack.pop());
  }
  return result;
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


// console.log(graph)
// console.log(topologicalSort(graph))


//---------------------------------------------
function shortestPath(graph, a, b){

  console.log(a, b)
    var min = Number.MAX_VALUE;

    function walk(vertex, steps){
        if(steps > min) return;
        for (var i = 0; i < vertex.edges.length; i += 1) {
            if(vertex.edges[i] === b){
                if(steps < min) min = steps;
            }
            walk(a.edges[i], steps += 1);
        }
    }
    walk(a, 0);
    return min;
}

console.log(shortestPath(graph, graph.getVertex('A'), graph.getVertex('F')))



