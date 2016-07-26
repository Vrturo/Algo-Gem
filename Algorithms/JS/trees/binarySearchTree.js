// How would you create a binary search tree?


function Node( val ){ // to create a tree you need a node. a node in a tree looks like
  this.value = val;
  this.left = null;
  this.right = null;
}

function BinarySearchTree(){
  this.root = null;
}


BinarySearchTree.prototype.push = function( val ){
   var root = this.root;

   if( !root ){ // if root doesnt exist
      this.root = new Node( val ); // create a new node from the val
      return;
   }

   var currentNode = root;
   var newNode = new Node( val );

   while( currentNode ){ // traverse through tree for empty branch
      if( val < currentNode.value ){
          if( !currentNode.left ){
             currentNode.left = newNode;
             break;
          }
          else{
             currentNode = currentNode.left;
        }
     }
     else{
         if( !currentNode.right ){
            currentNode.right = newNode;
            break;
         }
         else{
            currentNode = currentNode.right;
         }
     }
  }

}
