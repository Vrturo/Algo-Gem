// Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer,
// or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

// Design an algorithm to serialize and deserialize a binary search tree. There is no restriction on how your serialization/deserialization algorithm should work.
// You just need to ensure that a binary search tree can be serialized to a string and this string can be deserialized to the original tree structure.

// The encoded string should be as compact as possible.

// Note: Do not use class member/global/static variables to store states. Your serialize and deserialize algorithms should be stateless.


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    if (!root) return root;
    let str = '';
    const q = [];
    q.push(root);

    while (q.length) {
        const node = q.shift();
        if (node === '$') {
            str += '$';
        } else if(node === '#') { // leaf node
            str += '#';
        } else {
            if (node.left || node.right) {
                str += node.val;
                node.left ? q.push(node.left) : q.push('$');
                node.right ? q.push(node.right) : q.push('$');
            } else {
                str += node.val;
                q.push('#')
            }
        }
    }
    return str;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    console.log(data)
    if (!data) return data;
    data = data.split('');
    const tree = new TreeNode(Number(data[0]));
    const nodes = [tree];
    let i = 1;
    while (nodes.length) {
        const node = nodes.shift();
        if(node !== '#') {
            let child;
            child = new TreeNode(Number(data[i]));
            if (child.val){
                node.left = child;
                nodes.push(child);
            }
            i += 1;
            child = new TreeNode(Number(data[i]));
            if (child.val){
                node.right = child;
                nodes.push(child);
            }
            i += 1;
        }
    }
    return tree;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
