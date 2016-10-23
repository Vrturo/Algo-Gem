// How to perform preOrder traversal


// pre order: P L R

//     23
//    /  \
//   16   45
//  / \   /  \
// 3 22  37  99

// Preorder traversal:
// 23 16 3 22 45 37 99


function preOrder( node ){
   if( node ){
      console.log( node.value ); // print out current node, then traverse
      preorder( node.left );
      preorder( node.right );
   }
}
