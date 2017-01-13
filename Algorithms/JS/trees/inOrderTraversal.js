// How to perform in order traversal

// in order: L P R

//     23
//    /  \
//   16   45
//  / \   /  \
// 3 22  37  99

// Inorder traversal:
// 3 16 22 23 37 45 99

// TIP: if BST, order will always be smallest to biggest

function inorder( node ){
   if( node ){
      inorder( node.left ); // traverse down tree till bottom node hits before output value
      console.log( node.value );
      inorder( node.right );
   }
}

// concat bst in array

function inorder(node, result=[]){
    if(!node) return;

    inorder(root.left, result)
    result.push(root.val);
    inorder(root.right, result)
    return result;
}
