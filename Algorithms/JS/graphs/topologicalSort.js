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
