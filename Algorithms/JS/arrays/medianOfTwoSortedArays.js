// There are two sorted arrays nums1 and nums2 of size m and n respectively.
// Find the median of the two sorted arrays.
// The overall run time complexity should be O(log (m+n)).



// Logic

// create a function called median that takes values
  // sort these values
  // create a var called half by
    // set half by grabbing length of values dividing it by half and rounding it
  // if length of values is even return that item
  // else return the half index and the item before it, add them and divide it by 2
// call the median function on the two given arrays comboned or concat'd


var findMedianSortedArrays = function(nums1, nums2) {
    function median(values) {
        values.sort( function(a,b) {return a - b;} );
        var half = Math.floor(values.length/2);
        if(values.length % 2)
            return values[half];
        else
            return (values[half-1] + values[half]) / 2.0;
    }
    median(nums1.concat(nums2));
};
