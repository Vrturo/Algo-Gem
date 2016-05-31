// You are climbing a stair case. It takes n steps to reach to the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?


var climbStairs = function(n) {
    if(n === 0)  {
      return 0;
    }
    if(n === 1){
      return 1;
    }
    if(n === 2){
      return 2;
    }

    var arr = [1,2];
    for(var i = 2; i < n; i++) {
        arr[i] = arr[i-1] + arr[i-2];
    }
    return arr[n-1];
};
