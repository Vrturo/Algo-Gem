// Given a set of non-negative integers, and a value sum,
// determine if there is a subset of the given set with sum equal to given sum.

// Examples: set = [3, 34, 4, 12, 5, 2], sum = 9
// Output:  True  //There is a subset (4, 5) with sum 9.



function subSetSum( nums, target ){
  var list = [];
  backtrack( list, [], nums, 0);
  return list;
}

function backtrack( list, tempList, nums, start ){
    list.push( tempList );
    for( var i = start; i < nums.length; i++ ){
      tempList.push( nums[i] );
      backtrack( list, tempList, nums, i+1 );
      tempList.pop();
    }
}



var set = [ [1, 2] ];
console.log(subSetSum( set ))

