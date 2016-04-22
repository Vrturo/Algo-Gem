// Serialization is the process of converting a data structure or object into a sequence of bits
// so that it can be stored in a file or memory buffer,
// or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

// Design an algorithm to serialize and deserialize a binary tree.
// There is no restriction on how your serialization/deserialization algorithm should work.
// You just need to ensure that a binary tree can be serialized to a string
// and this string can be deserialized to the original tree structure.

// For example, you may serialize the following tree

//     1
//    / \
//   2   3
//      / \
//     4   5

// as "[1,2,3,null,null,4,5]", just the same as how LeetCode OJ serializes a binary tree.
// You do not necessarily need to follow this format, so please be creative and come up with different approaches yourself.



var serialize = function(root) {
  var results=[];
  var serializeHelper = function(root,list) {
      if (!root) {
        list.push("#");
      }
      else {
          lst.push(root.val);
          serializeHelper(root.left,list);
          serializeHelper(root.right,list);
      }
  };
    serializeHelper(root,results);
    return results.toString();
};


var deserialize = function(data) {
    if(!data||data.length===0) {
      return null;
    }
    var deserializeHelper = function(list) {
      if (list.length<1) {
        return null;
      }
      var val=list.splice(0,1);
      if (val[0]==="#") {
        return null;
      }
      var root=new TreeNode(parseInt(val));
      root.left=deserializeHelper(list);
      root.right=deserializeHelper(list);
      return root;
  };
    return deserializeHelper(data.split(","));
};
