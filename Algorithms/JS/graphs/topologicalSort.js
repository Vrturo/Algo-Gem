// Adjacency List constructor



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


console.log(graph)
console.log(topologicalSort(graph))
