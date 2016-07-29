// How do you implement Depth First Search



function dfs( node ){
  if( node ){ // if node exists, output value. Then call dfs on children if any
    console.log( node.value );
    dfs( node.left );
    dfs( node.right );
  }
}
