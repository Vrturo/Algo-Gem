class Vertex {
  constructor(val) {
    this.value = val;
    this.edges = {};
  }
}

class Graph {
  constructor() {
    this.vertices = {};
    this.totalVertices = 0;
    this.totalEdges = 0;
  }

  addVertex: function(val){
    if (!this.vertices[val]){
      const vertex = new Vertex(val);
      this.vertices[val] = vertex;
      this.totalVertice += 1;
    } else {
      return 'val exists';
    }
  }

}

