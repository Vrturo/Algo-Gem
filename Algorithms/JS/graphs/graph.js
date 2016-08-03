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
      return vertices[val]
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

    delete vertOne.edges;
    delete vertTwo.edges;

    this.edges--;
  },

  findNeighbors: function(val){
    neighborsArr = [];
    for(key in val.edges){
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

var graph = new Graph();
var myVertices = ['A','B','C','D','E','F','G','H','I']; //{7}
for( var i=0; i<myVertices.length; i++ ){ //{8}
  graph.addVertex( myVertices[i] );
}
graph.addEdge('A', 'B'); //{9}
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');
console.log(graph)

console.log(graph.vertices['A'].edges);
