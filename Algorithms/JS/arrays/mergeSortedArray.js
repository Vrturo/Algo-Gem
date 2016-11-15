// Merge two sorted arrays in order


/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */


var merge = function(nums1, m, nums2, n) {
    var i = m-1,
        j = n-1,
        k = m+n -1;

    while(i>-1 && j>-1) nums1[k--] = (nums1[i]>nums2[j]) ? nums1[i--] : nums2[j--];
    while( j>-1 ) nums1[k--] = nums2[j--];
};


// --------------------

var merge = function(nums1, m, nums2, n) {

    for( var i=0, j=0; i< m && j<n; ){
        if( nums1[i] < nums2[j] ){
            i++;
        } else if( nums1[i] === nums2[j] ){
            j++;
        } else {
            nums1.splice( i, 0, nums2[j] );
            j++;
        }
    }

};

// --------------------------------------------------

function mergeSortedArray(a, b){
  var merged = [],
      aElm = a[0],
      bElm = b[0],
      i = 1,
      j = 1;

  if(a.length ==0)
    return b;
  if(b.length ==0)
    return a;
  /*
  if aElm or bElm exists we will insert to merged array
  (will go inside while loop)
   to insert: aElm exists and bElm doesn't exists
             or both exists and aElm < bElm
    this is the critical part of the example
  */
  while(aElm || bElm){
   if((aElm && !bElm) || aElm < bElm){
     merged.push(aElm);
     aElm = a[i++];
   }
   else {
     merged.push(bElm);
     bElm = b[j++];
   }
  }
  return merged;
}
