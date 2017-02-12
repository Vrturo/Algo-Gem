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


// ----------------------------------------------------------------------------------------------

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */

// BFT approach - Logic

// create str to append values and return at the end
// create a q, starting with the root
  // remove first first element of q and tore as our current node
  // $ is the symbol being used to store null values
  // if the current node is null, append it to str with a comma to be able to seperate effectively
  // if current node isnt null
    // check to see if node has any children
      // if node has any children
        // append children's value to our q, or $ to our q if one child is null
      // if node has no children
        // append current node value to string with a comma
        // then oush two $'s because we know its a leaf node and has no children

var serialize = function(root) {
    if (!root) return root;
    let str = '';
    const q = [root];

    while (q.length) {
        const node = q.shift();
        if (node === '$') {
            str += '$' + ',' ;
        } else {
            if (node.left || node.right) {
                str += node.val + ',';
                node.left ? q.push(node.left) : q.push('$');
                node.right ? q.push(node.right) : q.push('$');
            } else { // leaf node
                str += node.val + ',';
                q.push('$', '$');
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

// reset data split by comma so we can look at each element
// create new node structure with the first element in our data which is gonna be our root
// create a nodes que with the starting value as root
// create a variable to point at our data
// create a while loop that traverses through our data and append's children to nodes while there elements in q
  // deque first node and store it as current node
  // create child var to fill in
  // set child as a new node using the current data thats being pointed at
  // if child has a value and not a '$' then it needs to be asssigned
    // assign child to current node's left child and push child node to q
  // increment pointer to next item in data
  // set a new child as a new node using the current data thats being pointed at
  // if child has a value and not a '$' then it needs to be asssigned
    // assign child to current node's right child and push child node to q
  // increment pointer to next item in data
// return tree at the end

var deserialize = function(data) {
    if (!data) return data;
    data = data.split(',');
    const tree = new TreeNode(Number(data[0]));
    const nodes = [tree];
    let i = 1;
    while (nodes.length) {
        const node = nodes.shift();
        let child = new TreeNode(Number(data[i]));
        if (!isNaN(child.val)) { // allows 0 to be a value
            node.left = child;
            nodes.push(child);
        }
        i += 1;
        child = new TreeNode(Number(data[i]));
        if (!isNaN(child.val)) { // allows 0 to be a value
            node.right = child;
            nodes.push(child);
        }
        i += 1;
    }
    return tree;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
