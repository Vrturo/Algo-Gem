// Given an unsorted array of nonnegative integers, find a continous subarray which adds to a given number.

// Examples:

// Input: arr[] = {1, 4, 20, 3, 10, 5}, sum = 33
// Ouptut: Sum found between indexes 2 and 4

// Input: arr[] = {1, 4, 0, 0, 3, 10, 5}, sum = 7
// Ouptut: Sum found between indexes 1 and 4

// Input: arr[] = {1, 4}, sum = 0
// Output: No subarray found
// There may be more than one subarrays with sum as the given sum. The following solutions print first such subarray.


// loop through arr and keep track of:
  // curr index, i
  // pointer, j
  // current sum, currSum
  // in our loop
    // set currSum as the sum of our two elements pointed at
    // create a while loop that
      // iterates our j pointer and upates our current sum until we find our sum or pass it
    // once our while breaks
    // if currsum = sum return the indices
    // if we havent found our current sum restart j one index in front of i on the next iteration


function sum(arr, sum){

  for( var i = 0, j = 1, currSum; i < arr.length-1; i++){
    currSum = arr[i]+arr[j];
    while( currSum < sum ){
      j++;
      currSum += arr[j];
    };
    if( currSum === sum ) return [i, j];
    j = i+2;
  }
  return 'no sum'
}

var ex = [1, 4, 20, 3, 10, 5]
console.log( sum(ex, 33) )

var ex2 = [1, 4, 0, 0, 3, 10, 5]
console.log( sum(ex2, 7) )

var ex3 = [1, 4]
console.log( sum(ex3, 0) )
