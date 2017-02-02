// Intersection Of Sorted ArraysBookmark Suggest Edit

// Find the intersection of two sorted arrays.
// OR in other words,
// Given 2 sorted arrays, find all the elements which occur in both the arrays.

// Example :

// Input :
//     A : [1 2 3 3 4 5 6]
//     B : [3 3 5]

// Output : [3 3 5]

// Input :
//     A : [1 2 3 3 4 5 6]
//     B : [3 5]

// Output : [3 5]

/**
 * @param {arr[]} A
 * @param {arr[]} B
 * @return {arr[]}
 */

// create a map to store each value from the first array and check against the second array
// loop through first array
  // if the element hasnt existed
    // create it in map and set it to 1
  // if element exists
    // increment count
// create result variable to return our intersecting integers
// loop through second array
  // if current element exists on our map
    // it is an intersecting integer
    // push the intersecting integer into result array
    // if the count was 1 we delete the key
    // if count is larger than one, decrement by 1
// return result at the end

function intersect(A, B) {
  const map = {};
  for (let i = 0; i < A.length; i += 1) {
    if (map[A[i]]) {
      map[A[i]] += 1;
    } else {
      map[A[i]] = 1;
    }
  }
  const result = [];
  for (let j = 0; j < B.length; j += 1) {
    if (map[B[j]]) {
      result.push(B[j]);
      map[B[j]] < 1 ? delete map[B[j]] : map[B[j]] -= 1;
    }
  }
  return result;
}
console.log(intersect([1], [1]));
