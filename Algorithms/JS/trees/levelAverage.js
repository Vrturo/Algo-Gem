// Write a method for the BinaryTree class called levelAverage that prints the average at each level.
// You may assume the tree contains all integers and is not empty.


// Assume your tree has the following properties:
// tree.root => returns root node of the tree

// The nodes of your tree have the following properties:
// node.leftChild => returns the left child of the node or null
// node.rightChild => returns the right child of the node or null

// Time Complexity: O(n)
// Space Complexity: O(n)

function Node(val){
  this.value = val;
  this.right;
  this.left;
}

function BinaryTree(){
  this.root;
}

BinaryTree.prototype.insert = function(val){
  var toInsert = new Node(val);
  if(!this.root){
    this.root = toInsert;
  }
  else{

    function traverse(cNode){
      if(cNode.value < toInsert.value){
        if(!cNode.right){
           cNode.right = toInsert
        }
        else {
           traverse(cNode.right)
        }
      }
      if(cNode.value > toInsert.value){
        if(!cNode.left){
           cNode.left = toInsert
        }
        else {
           traverse(cNode.left)
        }
      }
    }

    traverse(this.root)
  }

}

BinaryTree.prototype.levelAverage = function(){
  var lib = {},
      result = [];
  function traverse(cNode, cDepth){
    if(cNode === undefined){
      return;
    }
    else{
      if(lib[cDepth] === undefined){
        lib[cDepth] = [cNode.value];
      }
      else{
        lib[cDepth].push(cNode.value);
      }
      traverse(cNode.left, cDepth+1);
      traverse(cNode.right, cDepth+1);
    }

  }
  traverse(this.root, 0);

  for(var i = 0; i < Object.keys(lib).length; i++){
    var sum = lib[i].reduce(function(a, b) { return a + b; });
    var avg = sum / lib[i].length;
    result.push(avg);
  }
  console.log(result);
  return result;
}

tree = new BinaryTree()

tree.insert(3)
tree.insert(7)
tree.insert(1)
tree.insert(5)
tree.insert(2)
tree.insert(10)
tree.levelAverage();

// console.log(tree)




