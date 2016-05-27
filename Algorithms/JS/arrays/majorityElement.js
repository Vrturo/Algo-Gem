// Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

// You may assume that the array is non-empty and the majority element always exist in the array.


var majorityElement = function(nums) {
    var map = {};

    for (var i = 0; i < nums.length; i++) {
        var times = map[nums[i]] || 0;
        if ((times + 1) > parseInt(nums.length/2, 10)) {
            return nums[i];
        }
        map[nums[i]] = times + 1;
    }
};


var majorityElement = function(nums) {
    var map = {};

    for(var i=0;i<nums.length;i++){
        map[nums[i]] = map[nums[i]] + 1 || 1;
        if(map[nums[i]] > nums.length / 2){
            return nums[i];
        }
    }
};
