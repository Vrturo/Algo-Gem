// Problem: Quicksort                                                *
//   *                                                                    *
//   *  Prompt: Given an unsorted array of numbers,                       *
//   *          return a sorted array using Quicksort sort.               *
//   *                                                                    *
//   *  Input:  An unsorted array                                         *
//   *  Output: A sorted array                                            *
//   *                                                                    *
//   *  Example: input = [3,9,1,4,7] , output = [1,3,4,7,9]               *


var quickSort = function(input){
  var pivot,
      less = [],
      greater = [],
      sortedArr = [];
  if (input.length <= 1){
    return input;
  }
  else {
    pivot = input[Math.floor(Math.random()*input.length)];
    input.splice([input.indexOf(pivot)], 1);
    for (var i = 0; i < input.length; i++){
      if( input[i] <= pivot){
        less.push(input[i]);
      }
      else{
        greater.push(input[i]);
      }
    }
  }
  sortedArr.push(quickSort(less));
  sortedArr.push(pivot);
  sortedArr.push(quickSort(greater));
  var merged = [].concat.apply([], sortedArr);
  return merged;
};
