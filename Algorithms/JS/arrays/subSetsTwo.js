// Given a collection of integers that might contain duplicates, nums, return all possible subsets.

// Note: The solution set must not contain duplicate subsets.

// For example,
// If nums = [1,2,2], a solution is:

// [
//   [2],
//   [1],
//   [1,2,2],
//   [2,2],
//   [1,2],
//   []
// ]

var subsetsWithDup = function(nums) {
  nums.sort(function(val1, val2){ return val1 > val2 ? 1 : val1 < val2 ? -1 : 0});

  var solution = [],
      result = [],
      used = [];  // nums, each element can only be used once

  var backTracking = function(k, n) {
    if( k===n ){
      return result.push( solution.slice(0) );
    }else{
      var last = "";
      for(var i=0; i<nums.length; ++i){
        if( used[i] ) continue; // when true, express the element(used[i]) has been used
        if( k>0 && solution[k-1]>nums[i] ) continue;  // elements can only small to large order
        if( last==nums[i] ) continue; // when nums[i-1] == nums[i], discard(x)
        used[i] = true;
        last = nums[i];
        solution[k] = nums[i];
        subsetsWithDup( k+1, n ); // backTracking(k+1, n);
        used[i] = false;
      }
    }
  };

  for(var i=0; i<=nums.length; ++i){
    backTracking(0, i);
    // eg. subsets([2, 1, 2]);
    // console.log(nums.sort()); [1, 2, 2]
    // backTracking(0, 0); return [];
    // backTracking(0, 1); return [1], [2], [2](x);
    // backTracking(0, 2); return [1, 2], [1, 2](x), [2, 2];
    // backTracking(0, 3); return [1, 2, 2];
  }

  return result;
};
