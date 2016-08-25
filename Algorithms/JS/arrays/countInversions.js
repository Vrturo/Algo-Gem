// Count Inversions in an array.

// Inversion Count for an array indicates – how far (or close) the array is from being sorted.
// If array is already sorted then inversion count is 0. If array is sorted in reverse order that inversion count is the maximum.
// Formally speaking, two elements a[i] and a[j] form an inversion if a[i] > a[j] and i < j

// Example:
// The sequence 2, 4, 1, 3, 5 has three inversions (2, 1), (4, 1), (4, 3).

function countInversions(array){

  if ( array.length === 0 || array.length === 1 ) return 0;

  var count = 0; // count for inversions
  sort( array );
  return count;


  function sort(arr) {
    if (arr.length === 1) return arr; // base case
    var right = arr.splice(Math.floor(arr.length/2), arr.length - 1);
    return merge( sort(arr), sort(right) );
  }

  function merge(left, right){

    var merged = [],
        l = 0,
        r = 0,
        multiplier = 0;

    while (l < left.length || r < right.length){
      if (l === left.length){
        merged.push(right[r]);
        r++;
      } else if (r === right.length){
        merged.push(left[l]);
        l++;
        count += multiplier;
      } else if (left[l] < right[r]) {
        merged.push(left[l]);
        count += multiplier;
        l++;
      } else {
        merged.push(right[r]);
        r++;
        multiplier++;
      }
    }
    return merged;
  }
}

// console.log(countInversions([1, 2, 3]) === 0);
// console.log(countInversions([1, 3, 2]) === 1);
// console.log(countInversions([3, 2, 1, 4, 5]) === 3);
// console.log(countInversions([6, 5, 4, 3, 2, 1]) === 15);

