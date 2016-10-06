// Suppose you’d like to traverse through a family tree in JavaScript, printing each generation of children on a single line.

// Breadth-first search (BFS) is an algorithm for traversing or searching tree or graph data structures.
// It starts at the tree root (or some arbitrary node of a graph, sometimes referred to as a 'search key'[1])
// and explores the neighbor nodes first, before moving to the next level neighbors.


function printTree( root ){
    var queue = [];

    queue.push( root );

    while( queue.length ){
        for( var i = 0; i < queue.length; i++ ){

            var index = queue.shift();

            console.log( index )

            var node = tree[index];

            if( node.left ) queue.push( node.left );
            if( node.right ) queue.push( node.right );
        }
    }
}

printTree(T);
