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

// --------------------------------------------------------------------------------------------------


/**********************************************************************
 *  Problem : Coin Change                                             *
    You are given coins of different denominations and a total amount
    of money amount.

    Write a function to compute the fewest number of
    coins that you need to make up that amount.

    If that amount of money cannot be made up by any combination of
    the coins, return -1.


    Example 1:
    coins = [1, 2, 5], amount = 11
    return 3 (11 = 5 + 5 + 1)

    Example 2:
    coins = [2], amount = 3
    return -1.
 **********************************************************************/



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


var coinChange = function(coins, amount) { // 196ms runtime
    var change = new Array( amount + 1);
    change.fill( Number.MAX_VALUE-1 );
    change[0] = 0;

    for( var i=1; i<=amount; i++){
        for( var j=0; j<coins.length; j++ ){
            if( coins[j]<=i ) change[i] = Math.min( change[i-coins[j]]+1, change[i] );
        }
    }
    return change[amount] === Number.MAX_VALUE-1 ? -1 : change[amount];
};
