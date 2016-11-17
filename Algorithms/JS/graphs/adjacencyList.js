// Build a graph using an adjacency list.
// No vertex class
// Should have a storage property that holds vertex id along with all the edges.

// Methods:
// addVertex
// removeVertex
// addEdge
// removeEdge
// neighbors(vertex) -> return the array of neighbors for a vertex


class Vertex{
  constructor( val ){
    this.value = val;
    this.edges = {};
  }
}

class Graph{
  constructor(){
    this.vertices = {};
    this.totalVertices = 0;
    this.totalEdges = 0;
  }

  addVertex(val){
    if ( !this.vertices[val] ){
      this.vertices[val] = []; // storage
      this.totalVertices++;
    }
    else {
      return 'val exists';
    }
  }

  removeVertex(val){
    delete this.vertices[val];
    this.vertices--;
  }
}


