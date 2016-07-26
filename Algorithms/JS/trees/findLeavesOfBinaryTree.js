// Given a binary tree, collect a tree's nodes as if you were doing this:

// Collect and remove all leaves, repeat until the tree is empty.

// Example:
// Given binary tree
//           1
//          / \
//         2   3
//        / \
//       4   5
// Returns [4, 5, 3], [2], [1].

// Explanation:
// 1. Removing the leaves [4, 5, 3] would result in this tree:

//           1
//          /
//         2
// 2. Now removing the leaf [2] would result in this tree:

//           1
// 3. Now removing the leaf [1] would result in the empty tree:

//           []
// Returns [4, 5, 3], [2], [1].

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

var findLeaves = function(root) {
    var collection = [];

    function helper( node, arr ){
        console.log(node);
        if( node === null ) return node;
        else if( !node.left && !node.right ){
            arr.push( node.val );
        }
        else if( node.left && !node.right) helper( node.left, arr );
        else if( !node.left && node.right) helper( node.right, arr );
        else{
            helper(node.left, arr),
            helper(node.right, arr);
            node.left = null;
            node.right = null;
        }
        return arr;
    }
    collection.push( helper(root, []) );
    return collection;
};
