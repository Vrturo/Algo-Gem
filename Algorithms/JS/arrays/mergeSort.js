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
    if (arr.length < 2){
        return arr;
     }
    var mid = parseInt(arr.length / 2);
    var left   = arr.slice(0, mid);
    var right  = arr.slice(mid, arr.length);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(l, r){
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

// ----------------------

// using pointers

function merge(l, r) {

    var result = [];
    var p1 = 0;
    var p2 = 0;

    while (p1 < l.length && p2 < r.length) {
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
    if (arr.length < 2){
        return arr;
     }
    var mid = parseInt(arr.length / 2);
    var left   = arr.slice(0, mid);
    var right  = arr.slice(mid, arr.length);

    return merge(mergeSort(left), mergeSort(right));
}
