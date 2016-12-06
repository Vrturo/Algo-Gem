// Given an array of integers, every element appears twice except for one. Find that single one.

// Logic: XOR will return 1 only on two different bits. So if two numbers are the same, XOR will return 0.
// Finally only one number left.
// A ^ A = 0 and A ^ B ^ A = B.

var singleNumber = function(nums) {
    var result;
    for(var i=0; i<nums.length; i++){
        result ^= nums[i];
    }
    return result;
};

var singleNumber = function(nums) {
    return nums.reduce((a,b) => a^b);
};

// return input if length is less than 1
// create a hash map
// loop through nums input
  // set the key value pairs of th hash map
  // if the current nums value is undefined set it to 1
  // if it is created, add 1
// loop through hash map
// if the value is equal to 1 return the key


var singleNumber = function(nums) {
    if(nums.length<1) return nums;

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
