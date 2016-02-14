function sumOfArray(array) {
    var total = nums[0];
    for (var i = 1; i < nums.length; i++) {
        total = total + nums[i];
    }
    return total;
}

function sumOfArray(array){
  array.reduce(function(sum, num) {
    return sum + num;
  }, 0);
}
