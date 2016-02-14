// Given a set of distinct integers, nums, return all possible subsets.

// Note:
// Elements in a subset must be in non-descending order.
// The solution set must not contain duplicate subsets.

// For example,
// If nums = [1,2,3], a solution is:
// [
//   [3],
//   [1],
//   [2],
//   [1,2,3],
//   [1,3],
//   [2,3],
//   [1,2],
//   []
// ]


var subsets = function(nums) {
    var result = [];
    function helper(set, i){
        if (nums.length === i){
            result.push(set);
            return;
        }
        helper(set, Number(i+1));
        helper(set + nums[i], Number(i+1));
    }
    helper([],0);
    return result;
};
