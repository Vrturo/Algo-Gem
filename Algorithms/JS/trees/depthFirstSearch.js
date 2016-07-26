// How do you implement Breadth First Search



function dfs( node ){
  if( node ){
    console.log( node.value );
    dfs( node.left );
    dfs( node.right );
  }
}
