// Write a function that returns true if the given Binary Tree is SumTree else false.
// A SumTree is a Binary Tree where the value of a node is equal to sum of the nodes present in its left subtree and right subtree.
// An empty tree is SumTree and sum of an empty tree can be considered as 0. A leaf node is also considered as SumTree.

// Following is an example of SumTree.

//           26
//         /   \
//       10     3
//     /    \     \
//   4      6      3


function isSumTree(root) {
    function helper( node ){
        if(!node){
            return;
        } else {
            if ( node.left.val + node.right.val !== node.val ){
                return false;
            } else {
                isSumTree( node.left && node.right );
            }
            return true;
        }
    }
    return helper(root.left && root.right);
}

// ---------------------------------------


