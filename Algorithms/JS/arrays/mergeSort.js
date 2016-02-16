/**********************************************************************
   *                                                                    *
   *  Problem: Mergesort                                                *
   *                                                                    *
   *  Prompt: Given an unsorted array of numbers,                       *
   *          return a sorted array using Mergesort sort.               *
   *                                                                    *
   *  Input:  An unsorted array                                         *
   *  Output: A sorted array                                            *
   *                                                                    *
   *  Example: input = [3,9,1,4,7] , output = [1,3,4,7,9]               *
   *                                                                    *

   *                                                                    *
   **********************************************************************/


function mergeSort(arr){
    if (arr.length < 2)
        return arr;

    var mid = parseInt(arr.length / 2);
    var left   = arr.slice(0, mid);
    var right  = arr.slice(mid, arr.length);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(l, r)
{
    var result = [];

    while (l.length && r.length) {
        if (l[0] <= r[0]) {
            result.push(l.shift());
        } else {
            result.push(r.shift());
        }
    }

    while (l.length)
        result.push(l.shift());

    while (r.length)
        result.push(r.shift());

    return result;
}
