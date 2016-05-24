// Given an array of integers, find if the array contains any duplicates.

// Your function should return true if any value appears at least twice in the array,
// and it should return false if every element is distinct.




var containsDuplicate = function(nums) {
    var map = {};
    for(var i = nums.length; i--;){
        if(map[nums[i]] !== undefined){
            return true;
        }
        else{
            map[nums[i]] = true;
        }
    }
    return false;
};
