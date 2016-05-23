// Given an array of integers, every element appears twice except for one. Find that single one.


var singleNumber = function(nums) {
    if(nums.length<1){
        return nums;
    }
    var map = {};
    for(var i=0;i<nums.length;i++){
        if(map[nums[i]] === undefined){
            map[nums[i]] = 1;
        }
        else{
            map[nums[i]] += 1;
        }
    }
    for(var key in map){
        if(map[key] === 1){
            return Number(key);
        }
    }
};
