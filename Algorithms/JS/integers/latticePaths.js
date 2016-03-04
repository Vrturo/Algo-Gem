 /*************************************************************************
  *                          Homework IX                                  *
  *                                                                       *
  *  Problem: Lattice Paths                                               *
  *                                                                       *
  *  Prompt: Count the number of unique paths to travel from the top left *
  *          to the bottom right of a lattice of squares.                 *
  *                                                                       *
  *  Input:  An interger N (which is the size of the lattice)             *
  *  Output: An interger (which represents the number of unique paths)    *
  *                                                                       *
  *  Example: N = 2 (2x2 board) => 6 (number of unique paths)             *
  *                                                                       *
  *  What is the time and auxilliary space complexity of your solution?   *
  *                                                                       *
  *  Note: When moving through the lattice, you can only move either down *
  *        or to the left.                                                *
  *                                                                       *
  *        Try implementing your solution using side effects recursion or *
  *        pure recursion.                                                *
  *                                                                       *
  *  Additional Resources:                                                *
  *    1: https://projecteuler.net/problem=15                             *
  *    2: https://en.wikipedia.org/wiki/Lattice_path                      *
  *                                                                       *
  *************************************************************************/


var latticePaths = function(n){
  var counter = 0;
  function traverse(x, y){
    if(x === n && y === n){
      counter ++;
      return
    }
    else if(x > n || y > n){
      return
    }

    traverse(x + 1, y);
    traverse(x, y+ 1);
  }
  latticePaths(0, 0);
    return count;
}


///// SOLUTIONS TAKING COORDINATES AS ARGUMENTS

var latPaths = function(x, y){
  var cache = {};
  function latMem(x, y){
    if(cache[x,y] !== undefined){
      return cache[x,y];
    };
    if(x === 0 && y === 0){
      return 1;
    }
    else if(x < 0 || y < 0){
      return;
    };
    var toInsert =  latMem(x - 1, y) + latMem(x, y -1)
    cache[x,y] = toInsert;
    return toInsert;
  }
  return latMem(x, y);
}

console.log(latPaths(1,1));


// var latticePaths = function(x, y) {
//   if(y === undefined){
//     return latticePaths(x,x);
//   }
//   else {
//     if(x === 0 && y === 0){
//     return 1;
//     }
//     else if(x < 0 || y < 0){
//       return 0;
//     }
//     else{
//       return (latticePaths(x - 1, y) + latticePaths(x, y -1)
//     }
//   }
// }
