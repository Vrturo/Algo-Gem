// How to perform postOrder traversal


//     23
//    /  \
//   16   45
//  / \   /  \
// 3 22  37  99

// Postorder traversal:
// 3 22 16 37 99 45 23

// A postorder traversal visits all of the child nodes of the left subtree up to the root node,
// and then visits all of the child nodes of the right subtree up to the root node.

function postOrder( node ){
   if( node ){
      postorder( node.left );
      postorder( node.right );
      console.log( node.value ); // print out current node, then traverse
   }
}
