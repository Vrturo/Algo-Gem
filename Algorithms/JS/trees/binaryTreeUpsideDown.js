// Given a binary tree where all the right nodes are either leaf nodes with a sibling
// (a left node that shares the same parent node) or empty,
// flip it upside down and turn it into a tree where the original right nodes turned into left leaf nodes.
// Return the new root.

// For example:
// Given a binary tree {1,2,3,4,5},
//     1
//    / \
//   2   3
//  / \
// 4   5
// return the root of the binary tree [4,5,2,#,#,3,1].
//    4
//   / \
//  5   2
//     / \
//    3   1


// if root is null return null
// create helper function that takes a node
  // set base case.
    // if node.left is null return the current node cuz it doesnt have a left child
  // set a temp variable as the result of the helper
  // set the child of the current node as the right sibling
  // set the right child as null
  // set the left child's, right child to the curreent node
  // set the left child to null
  // return our temp
// call and return our helper function on the root

var upsideDownBinaryTree = function(root) {
    if(root === null){
        return null;
    }
    function helper(node) {
        if(node.left === null){
            return node;
        }
        var tmp = helper(node.left);
        node.left.left = node.right;
        node.right = null;
        node.left.right = node;
        node.left = null;
        return tmp;
    }
    return helper(root);
};
