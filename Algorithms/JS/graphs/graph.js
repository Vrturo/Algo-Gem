// add functions to a Graph class to return various representations of the same graph.
// Your graph will have two different components: Nodes and Edges.

function Graph(){
    this.vertices = [];
    this.adjList = new Dictionary();
}

Graph.prototype.addVertex = function( vertex ) {
    this.vertices.push( vertex );
    this.adjList.set( vertex, [] );
}
