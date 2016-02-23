/**********************************************************************
 *  Problem : Coin Change                                             *
 *                                                                    *
 *  Prompt: US Currency has coins in circulation with the             *
 *          following value in cents: [1, 5, 10, 25, 50, 100]         *
 *                                                                    *
 *          Given a value, find how many unique ways to make change   *
 *          given the coin values in circulation.                     *
 *                                                                    *
 *  Input:  An integer N (value from which to make change)            *
 *  Output: An integer (number of unique ways to make change)         *
 *                                                                    *
 *  Time Complexity: NA                                               *
 *  Auxiliary Space Complexity: NA                                    *
 *                                                                    *
 *  Example: input = 11                                               *
 *           output = 4 ([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],           *
 *                       [5, 1, 1, 1, 1, 1, 1],                       *
 *                       [5, 5, 1],                                   *
 *                       [10, 1])                                     *
 *                                                                    *
 *  Challenge Mode: Solve coin change with you solution having:       *
 *                  Time Complexity: O(nm)                            *
 *                  Auxiliary Space Complexity: O(n)                  *
 *  Hint: www.geeksforgeeks.org/dynamic-programming-set-7-coin-change *
 **********************************************************************/


function coinChange(n){
  var CURRENCY = [1, 5, 10, 25, 50, 100];
  var result = [];
  function traverse(rem, arr){
    if(rem === 0){
      result.push(arr);
      return;
    }
    for(var i = 0; i < CURRENCY.length; i++){
      var temp = rem - CURRENCY[i]; // 10
      if (temp >= 0 ){ // rem = 11
        arr.push(CURRENCY[i]); // [1]
        traverse(temp, arr); // traverse(10, [1])
      }
    }
  }
  traverse(n, [])
  return result
}

function coinChange(total, coins){
  if(total === 0){
    return 1;
  }
  else if(total < 0){
    return 0;
  }
  var ways = 0;
  for (var i = 0; i < coins.length; i++){
    avail = coins.slice(i);
    ways += coinChange(total-coins[i], avail)
  }
  return ways.length;
}
