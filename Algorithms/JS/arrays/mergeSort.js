/**********************************************************************
   *                                                                    *
   *  Problem: Mergesort                                                *
   *                                                                    *
   *  Prompt: Given an unsorted array of numbers,                       *
   *          return a sorted array using Mergesort sort.

   *  There are four main steps in the merge sort algorithm:
      If the list is of length 0 or 1, then it is already sorted.

      Otherwise:
      Divide the unsorted list into two sublists of about half the size.
      Sort each sublist recursively by re-applying the merge sort.
      Merge the two sublists back into one sorted list.

   *                                                                    *
   *  Input:  An unsorted array                                         *
   *  Output: A sorted array                                            *
   *                                                                    *
   *  Example: input = [3,9,1,4,7] , output = [1,3,4,7,9]               *
   *                                                                    *

   *                                                                    *
   **********************************************************************/


function mergeSort(arr){
    if (arr.length < 2) return arr;

    var mid = parseInt(arr.length / 2),
        left   = arr.slice(0, mid),
        right  = arr.slice(mid); // slices rest of array

    return merge( mergeSort(left), mergeSort(right) );
}

function merge(l, r){
    var result = [];

    while( l.length && r.length ){
        if( l[0] <= r[0] ){
            result.push(l.shift());
        } else {
            result.push(r.shift());
        }
    }

    while( l.length ) result.push(l.shift());

    while( r.length ) result.push(r.shift());

    return result;
}

// ----------------------

// using pointers

function merge(l, r) {

    var result = [];
    var p1 = 0;
    var p2 = 0;

    while( p1 < l.length && p2 < r.length ){
        if (l[p1][1] >= r[p2][1]) {
            result.push(l[p1]);
            p1++;
        } else {
            result.push(r[p2]);
            p2++;
        }
    }
    while (p1 < l.length){
        result.push(l[p1]);
        p1++;
    }
    while (p2 < r.length){
        result.push(r[p2]);
        p2++;
    }
    return result;
}

function mergeSort(arr) {
    if (arr.length < 2) return arr;
    var mid = parseInt(arr.length / 2),
        left   = arr.slice(0, mid),
        right  = arr.slice(mid, arr.length);

    return merge(mergeSort(left), mergeSort(right));
}

var arr = [2,1,13,4,5,9,3,7,8,11,2,1,13,4,5,9,3,7,8,11,2,1]

