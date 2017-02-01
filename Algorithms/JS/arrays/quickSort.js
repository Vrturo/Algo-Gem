// Problem: Quicksort                                                *
//   *                                                                    *
//   *  Prompt: Given an unsorted array of numbers,                       *
//   *          return a sorted array using Quicksort sort.               *
//   *                                                                    *
//   *  Input:  An unsorted array                                         *
//   *  Output: A sorted array                                            *
//   *                                                                    *
//   *  Example: input = [3,9,1,4,7] , output = [1,3,4,7,9]               *



// Recursively
function quicksort( arr ){ // first index technique
    //if array is empty
    if( arr.length === 0 ) return [];
    var left = [],
        right = [],
        pivot = arr[0];
    //go through each element in array except pivot
    for (var i = 1; i < arr.length; i++) {
        if( arr[i] < pivot ){
           left.push( arr[i] );
        } else {
           right.push( arr[i] );
        }
    }
    return quicksort( left ).concat( pivot, quicksort(right) );
}

// ---------------------------------------------------------

// Iteratively
function iterativeQsort(arr, lo=0, hi=arr.length-1) {
  var index;

  if (arr.length > 1) {
    index = partition(arr, lo, hi);
    if (lo < index - 1) iterativeQsort(arr, lo, index - 1);
    if (index < hi) iterativeQsort(arr, index, hi);
  }

  return arr;
}

function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function partition(arr, lo, hi){
    var pivot = arr[ Math.floor( (hi+lo)/2 )],
        i = lo,
        j = hi;

    while ( i <= j) {

      while (arr[i] < pivot) i++;
      while (arr[j] > pivot) j--;

      if (i <= j) {
          swap(arr, i, j);
          i++;
          j--;
      }
    }
    return i;
}
var items = [4, 2, 6, 5, 3, 9]

console.log(iterativeQsort(items))

// ---------------------------------------------------------


var quickSort = function(input){
  var pivot,
      less = [],
      greater = [],
      sortedArr = [];

  if (input.length < 2){
    return input;
  } else {
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




var arr = [2,1,13,4,5,9,3,7,8,11,2,1,13,4,5,9,3,7,8,11,2,1]

