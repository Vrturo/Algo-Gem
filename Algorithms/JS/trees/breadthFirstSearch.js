// Suppose you’d like to traverse through a family tree in JavaScript, printing each generation of children on a single line.

// Breadth-first search (BFS) is an algorithm for traversing or searching tree or graph data structures.
// It starts at the tree root (or some arbitrary node of a graph, sometimes referred to as a 'search key'[1])
// and explores the neighbor nodes first, before moving to the next level neighbors.


function printTree( tree ){
    var queue = [];

    // enqueue root
    queue.push( 0 );

    while( queue.length ){ // for each node in the queue

            // dequeue
            var node = queue.shift();

            // print node
            console.log( node )

            // enqueue children of the node
            if( node.left ) queue.push( node.left );
            if( node.right ) queue.push( node.right );
    } // repeat
}
