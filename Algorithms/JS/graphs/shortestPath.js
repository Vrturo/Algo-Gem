// Given an unweighted, undirected graph which represents a metro map as follows
// vertices are stations
// edges are the path between two stations


// Given a start station and ending station, determine the minimum number of stops that must be made to get to the destination.

// Input: A Graph (unweighted/undirected), a starting Vertex, and an ending Vertex
// Output: Integer

// Example
// Input:

// The graph represented below, Vertex A, Vertex F

// Output:

// 2 Stops (From A stop at C, and then stop at F)

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
    const vertOne = this.vertices[valOne];
    const vertTwo = this.vertices[valTwo];

    vertOne.edges[valTwo] = true;
    vertTwo.edges[valOne] = true;

    this.totalEdges += 1;
  }

  removeEdge(valOne, valTwo) {
    if (this.vertices[valOne] && this.vertices[valTwo]) {
      const vertOne = this.vertices[valOne];
      const vertTwo = this.vertices[valTwo];

      delete vertOne.edges;
      delete vertTwo.edges;

      this.edges -= 1;
    } else {
      return 'edges dont exist';
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
    for (let i = 0; i < this.vertices.length; i += 1) {
      results.push(cb(this.vertices[i]));
    }
    return results;
  }

}
