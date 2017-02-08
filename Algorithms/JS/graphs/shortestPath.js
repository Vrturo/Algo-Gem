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


// Data Structure  -----------------------------------------------

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

    vertOne.edges[valTwo] = vertTwo;
    vertTwo.edges[valOne] = vertOne;

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

const graph = new Graph();
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


// ---------------------------------------------

// SOLUTIONS

// Recursive Approach
  // walk through each edge of the starting vertex and its edges as well if needed
  // for every recursive call update steps by 1 for that stack
  // if update min when end vertex is reached IF NEEDED
    // if end vertex is reached no need to loop through its edges - return stack
  // only walk through edges if edge hasn't been visited
  // return min at the end

function shortestPath(graph, a, b) {
  let min = Number.MAX_VALUE;
  const visited = {};

  function walk(vertex, steps) {
    visited[vertex.value] = true;
    const edgesArr = Object.keys(vertex.edges);
    for (let i = 0; i < edgesArr.length; i += 1) {
      if (edgesArr[i] === b.value) {
        if (steps < min) min = steps;
        return;
      }
      if (!visited[edgesArr[i]]) walk(graph.getVertex(edgesArr[i]), steps += 1);
    }
  }
  walk(a, 1);
  return min;
}

// --------------------------------------------------


function shortestPathTwo(graph, a, b) {
  let min = Number.MAX_VALUE;
  const visited = {};

  function walk(vertex, steps) {
    visited[vertex.value] = true;
    const edgesArr = Object.keys(vertex.edges);
    for (let i = 0; i < edgesArr.length; i += 1) {
      if (edgesArr[i] === b.value) {
        if (steps < min) min = steps;
      }
      if (!visited[edgesArr[i]] && min > steps + 1) walk(graph.getVertex(edgesArr[i]), steps += 1);
    }
  }
  walk(a, 1);
  return min;
}

// ----------------------------------------------------

// BFS approach
  // store steps in a tuple
  // update min when end vertex is reached IF NEEDED

function shortestPathThree(graph, a, b) {
  const visited = {};
  const q = [];
  let min = Number.MAX_VALUE;
  let steps = 0;
  q.push([a, steps]);

  while (q.length) {
    let tuple = q.pop();
    const currentV = tuple[0];
    steps = tuple[1] += 1;
    visited[currentV.value] = true;

    if (currentV.value === b.value) {
      if (steps < min) min = steps;
    }
    for (const k in currentV.edges) {
      if (!visited[k]) q.push([currentV.edges[k], steps]);
    }
  }
  return steps;
}

// #BFS

// --------------------------------------------------------------------------------------------
// function benchMark( g, a, b, results){
//   var start = new Date();
//   shortestPathThree(g, a, b);
//   var end = new Date();
//   return Number(end - start) // number of miliseconds
// }

// console.time('bm');
// console.log( benchMark( graph, graph.getVertex('A'), graph.getVertex('F')) );
// console.timeEnd('bm');
console.log( shortestPath( graph, graph.getVertex('A'), graph.getVertex('F')) );
