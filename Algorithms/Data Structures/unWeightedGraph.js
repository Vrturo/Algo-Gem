// add functions to a Graph class to return various representations of the same graph.
// Your graph will have two different components: Nodes and Edges.

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

  addVertex(val) {
    if (!this.vertices[val]) {
      const vertex = new Vertex(val);
      this.vertices[val] = vertex;
      this.totalVertices += 1;
    } else {
      return 'val exists';
    }
  }

  getVertex(val) {
    return this.vertices[val] ? this.vertices[val] : 'val not found';
  }

  removeVertex(val) {
    const delVert = this.vertices[val];
    const delEdges = delVert.edges;

    for (const key in delEdges) {
      this.removeEdge(key, val);
    }

    delete this.vertices[val];
    this.vertices -= 1;
  }

  addEdge(valOne, valTwo) {
    if (this.vertices[valOne] && this.vertices[valTwo]) {
      const vertOne = this.vertices[valOne];
      const vertTwo = this.vertices[valTwo];

      vertOne.edges[valTwo] = vertTwo;

      this.totalEdges += 1;
    } else {
      return 'values dont exist';
    }
  }


  removeEdge(valOne, valTwo) {
    if (this.vertices[valOne] && this.vertices[valTwo]) {
      const vertOne = this.vertices[valOne];
      const vertTwo = this.vertices[valTwo];

      delete vertOne.edges;
      delete vertTwo.edges;

      this.edges -= 1;
    } else {
      return 'values dont exist';
    }
  }

  findNeighbors(val) {
    const neighborsArr = [];
    for (const key in this.vertices[val].edges) {
      neighborsArr.push(key);
    }
    return neighborsArr;
  }

  forEachNode(cb) {
    const results = [];
    for (const val in this.vertices) {
      results.push(cb(this.verties[val]));
    }
    return results;
  }

}

const graph = new Graph();
const myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
for (let i = 0; i < myVertices.length; i += 1) {
  graph.addVertex(myVertices[i]);
}
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');
