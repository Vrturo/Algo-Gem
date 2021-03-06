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



var findMedianSortedArrays = function(nums1, nums2) { // 264 ms runtime
    var result = [],
        lLen = nums1.length,
        rLen = nums2.length,
        l = 0,
        r = 0;

    while(l < lLen && r < rLen){
       if(nums1[l] <= nums2[r]){
         result.push(nums1[l++]);
       }
       else{
         result.push(nums2[r++]);
      }
    }
    while(l < lLen ) result.push(nums1[l++]);
    while(r < rLen ) result.push(nums2[r++]);

    var len = result.length;
    return (len%2 === 0) ? ( result[len/2] + result[len/2-1] )/2 : result[(len-1)/2];
};

// ------------------------------------------------

var findMedianSortedArrays = function(nums1, nums2) { // 284 ms runtime
    var result = [];

    while( nums1.length && nums2.length ){
        if( nums1[0] <= nums2[0] ){
            result.push(nums1.shift());
        } else {
            result.push(nums2.shift());
        }
    }
    while( nums1.length ) result.push(nums1.shift());
    while( nums2.length ) result.push(nums2.shift());

    var len = result.length;
    return (len%2 === 0) ? ( result[len/2] + result[len/2-1] )/2 : result[(len-1)/2];
};

// ------------------------------------------------

var findMedianSortedArrays = function(nums1, nums2) {
    function median( values ) {
        values.sort( function(a,b) {return a - b;} );
        var half = Math.floor( values.length/2 );
        if( values.length % 2 ){
          return values[half];
        } else{
            return (values[half-1] + values[half]) / 2.0;
        }
    }
    return median( nums1.concat(nums2) );
};


// -------------------------------------------

// There are 2 sorted arrays A and B of size n each.
// Write an algorithm to find the median of the array obtained after merging the above 2 arrays(i.e. array of length 2n).

function findMedianSortedArrays( nums1, nums2, n ){

    /* return -1  for invalid input */
    if ( n <= 0 ) return -1;
    if ( n === 1 ) return ( nums1[0] + nums2[0] )/2;
    if ( n === 2 ) return ( Math.max(nums1[0], nums2[0]) + Math.min(nums1[1], nums2[1]) ) / 2;

    var m1 = median( nums1, n ), /* get the median of the first array */
        m2 = median( nums2, n ); /* get the median of the second array */

    /* If medians are equal then return either m1 or m2 */
    if ( m1 == m2 ) return m1;

    /* if m1 < m2 then median must exist in nums1[m1....] and
        nums2[....m2] */
    if ( m1 < m2 ) {
        if (n % 2 === 0) return findMedianSortedArrays( nums1 + n/2 - 1, nums2, n - n/2 +1 );
        return findMedianSortedArrays( nums1 + n/2, nums2, n - n/2 );
    }

    /* if m1 > m2 then median must exist in nums1[....m1] and
        nums2[m2...] */
    if (n % 2 === 0) return findMedianSortedArrays(nums2 + n/2 - 1, nums1, n - n/2 + 1);
    return findMedianSortedArrays(nums2 + n/2, nums1, n - n/2);
}

/* Function to get median of a sorted array */
function median( arr, n ){
    // return n%2 === 0 ? ( arr[n/2] + arr[n/2-1] )/2 : arr[n/2];
    if( n%2 === 0 ){
        return ( arr[n/2] + arr[n/2-1] )/2;
    } else {
        return arr[n/2];
    }
}
