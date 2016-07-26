// How to perform in order traversal


function inorder( node ){
   if( node ){
      inorder( node.left ); // traverse down tree till bottom node hits before output value
      console.log( node.value );
      inorder( node.right );
   }
}
