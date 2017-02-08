// add functions to a Graph class to return various representations of the same graph.
// Your graph will have two different components: Nodes and Edges.


var Vertex = function( val ){
  this.value = val;
  this.edges = {};
}

var Graph = function(){
  this.vertices = {};
  this.totalVertices = 0;
  this.totalEdges = 0;
}

Graph.prototype = {

  addVertex: function( val ){
    if ( !this.vertices[val] ){
      var vertex = new Vertex( val );
      this.vertices[ val ] = vertex;
      this.totalVertices++;
    }
    else {
      return 'val exists';
    }
  },

  getVertex: function( val ){
    if ( this.vertices[val] ){
      return this.vertices[val]
    }
    else {
      return 'val not found';
    }
  },

  removeVertex: function( val ){
    var delVert = this.vertices[val],
        delEdges = delVert.edges;

    for ( var key in delEdges ){
      removeEdge(key, val)
    }

    delete this.vertices[val];
    this.vertices--;
  },

  addEdge: function( valOne, valTwo ){
    var vertOne = this.vertices[valOne],
        vertTwo = this.vertices[valTwo];

    vertOne.edges[valTwo] = true;
    vertTwo.edges[valOne] = true;

    this.totalEdges++;
   },

  removeEdge: function(valOne, valTwo){
    var vertOne = this.vertices[valOne],
        vertTwo = this.vertices[valTwo];
    'write error if not edges'

    delete vertOne.edges;
    delete vertTwo.edges;

    this.edges--;
  },

  findNeighbors: function(val){
    var neighborsArr = [];
    for(key in this.vertices[val].edges){
      neighborsArr.push(key)
    }
    return neighborsArr;
  },

  forEachNode: function(cb){
    var results = [];
    for (val in this.vertices){
      results.push(cb());
    }
    return results;
   }

}

// var graph = new Graph();
// var myVertices = ['A','B','C','D','E','F','G','H','I']; //{7}
// for( var i=0; i<myVertices.length; i++ ){ //{8}
//   graph.addVertex( myVertices[i] );
// }
// graph.addEdge('A', 'B'); //{9}
// graph.addEdge('A', 'C');
// graph.addEdge('A', 'D');
// graph.addEdge('C', 'D');
// graph.addEdge('C', 'G');
// graph.addEdge('D', 'G');
// graph.addEdge('D', 'H');
// graph.addEdge('B', 'E');
// graph.addEdge('B', 'F');
// graph.addEdge('E', 'I');
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
  var min = Number.MAX_VALUE,
      visited = {};

  function walk(vertex, steps){
    visited[vertex.value] = true;
    var edgesArr = Object.keys(vertex.edges);
    for( var i = 0; i < edgesArr.length; i += 1) {
      if (edgesArr[i] === b.value) {
        if (steps < min) min = steps;
      }
      if(!visited[edgesArr[i]]) walk(graph.getVertex(edgesArr[i]), steps += 1);
    }
  }
  walk(a, 1);
  return min;
}


function shortestPathTwo(graph, a, b){
  var min = Number.MAX_VALUE,
      visited = {};

  function walk(vertex, steps){
    visited[vertex.value] = true;
    var edgesArr = Object.keys(vertex.edges);
    for( var i = 0; i < edgesArr.length; i += 1) {
      if (edgesArr[i] === b.value) {
        if (steps < min) min = steps;
      }
      if(!visited[edgesArr[i]] && min > steps + 1) walk(graph.getVertex(edgesArr[i]), steps += 1);
    }
  }

  walk(a, 1);
  return min;
}


// console.log(shortestPath(graph, graph.getVertex('A'), graph.getVertex('F')))
function benchMark( g, a, b, results){
  var start = new Date();
  shortestPathTwo(g, a, b);
  var end = new Date();
  return Number(end - start) // number of miliseconds
}

console.time('bm');
console.log( benchMark( graph, graph.getVertex('A'), graph.getVertex('F')) );
console.timeEnd('bm');

