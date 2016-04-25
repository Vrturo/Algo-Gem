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


Q: Given an array of characters, print all possible combinations. For example given a, b, c, print
a
b
c
ab
ac
abc
bc



var combination = function(array){
    var str = array.join("");

    function helper(string){
        if (set.length === 0){
            return [""]
        }
        else{
          var last = str[string.length-1]
          var sub = helper(str.slice(0, -1));
          var joined = sub.map(function(character){
              return character + last;
          })
          return sub.concat(joined)
        }
    }

    return helper(str)
}

