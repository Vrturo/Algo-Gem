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

/* A helper function to get the sum of values in tree with root
     as root */
function sum( node ) {
    if (node === null) return 0;
    return sum(node.left) + node.data + sum(node.right);
}

/* returns 1 if sum property holds for the given
   node and both of its children */
function isSumTree( node ) {
    var ls, rs;

    /* If node is NULL or it's a leaf node then
       return true */
    if ( (node === null) || (node.left === null && node.right === null) )
        return true;

    /* Get sum of nodes in left and right subtrees */
    ls = sum(node.left);
    rs = sum(node.right);

    /* if the node and both of its children satisfy the
       property return 1 else 0*/
    if ( (node.data === ls + rs) && (isSumTree(node.left) !== 0 ) && ( isSumTree(node.right)) != 0 )
        return true;

    return false;
}
