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


// Logic

// The key is to find the height of each node. Here the definition of height is:
  // The height of a node is the number of edges from the node to the deepest leaf

// create a var to store collection of nodes to return
// use a helper function to return the height of current node.
// According to the definition, the height of leaf is 0. h(node) = 1 + max(h(node.left), h(node.right)).
// The height of a node is also the its index in the array collection. For example, leaves, whose heights are 0,
// are stored in collection[0]. Once we find the height of a node, we can put it directly into the collection.

var findLeaves = function(root) {
    var collection = [];

    function height(node, arr) {
        if (node === null) return -1;
        var level = 1 + Math.max(height(node.left, arr), height(node.right, arr));
        if (arr.length < level + 1) arr.push([]);
        arr[level].push(node.val);
        return level;
    }

    height(root, collection);
    return collection;
};

// ----------------------------------------------------------

// Only gets bottom level leaves

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
