// Given a sorted array of integers, find the number of occurrences of a given target value.
// Your algorithm’s runtime complexity must be in the order of O(log n).
// If the target is not found in the array, return 0

// **Example : **
// Given [5, 7, 7, 8, 8, 10] and target value 8,
// return 2.

/**
 * @param {array[], number} nums k
 * @return {number}
 */


// create a bSearch function that ultimately doesnt just find the element
// but finds the first and last occurence indices


 function countOccur(nums, k){

    function bSearch(arr, searchFirst){
        var low = 0, // low index
            high = arr.length -1, // highest index
            result = -1, // final check if element occured
            mid; // mid index

        while( low<=high ){ // once low meets high index, loops stops
            mid = Math.floor( (low+high)/2 ); // grabs mid index

            if( arr[mid] === k ){
              result = mid;
              // if searchFirst is true, it means its our first search
                    // and we go on searching lower indices (towards left) to find the first indice
              // else we go on searching higher indices (towards right) and find the last index
              searchFirst ? high = mid - 1 : low = mid + 1;
            } else if( k < arr[mid]){ // if mid element is greater than k
              high = mid-1 // set our highest index to one element before the current mid index
            } else { // if mid element is less than k
              low = mid+1 // set our lowest index to one element after the current mid index
            }
        }
        return result; // return result to check if the element occurs
    }

    var firstIndex = bSearch(test, true);
    if(firstIndex === -1){
        return 0;
    } else {
        var lastIndex = bSearch(test, false);
        return (lastIndex - firstIndex)+1
    }
}
var test = [1,2,2,2,2,3,4,5,5,5,5,6,6,7];
var k = 5;

console.log( countOccur(test, k) );
