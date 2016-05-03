// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution.

// Example:
// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].


var twoSum = function(nums, target) {
    var numLength=nums.length;
    if(numLength<2){
        return nums;
    }
    var map={};
    for(var i = 0; i < numLength; i++){
         if(map[target - nums[i]] || map[target-nums[i]] === 0)
        {
            return [map[target-nums[i]], i];
        }
        if(map[nums[i]]===undefined){
            map[nums[i]]=i;
        }
    }
};
