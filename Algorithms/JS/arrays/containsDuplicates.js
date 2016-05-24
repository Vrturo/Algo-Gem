// Given an array of integers, find if the array contains any duplicates.

// Your function should return true if any value appears at least twice in the array,
// and it should return false if every element is distinct.


// create a hash map to keep track of what numbers exist
// reverse loop through nums array
  // if the number exists in the hash map
    // return true
  // else set it to something
// return false if true hasnt yet

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
