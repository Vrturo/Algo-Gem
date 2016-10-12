// Given a binary tree, find its maximum depth.

// The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

var maxDepth = function(root) { // 104 ms runtime
    if( root === undefined || root===null ) return 0;
    return Math.max( maxDepth(root.right), maxDepth(root.left) ) +1;
};


//-----------------------------------------------------

var maxDepth = function(root){
    var maxDepth = 0;

    var traverse = function(cNode, depth){
        if (cNode === null){
            maxDepth = Math.max(maxDepth, depth);
            return;
        }

        traverse(cNode.right, depth + 1);
        traverse(cNode.left, depth + 1);
    }
    traverse(root, 0);

    return maxDepth;
}
