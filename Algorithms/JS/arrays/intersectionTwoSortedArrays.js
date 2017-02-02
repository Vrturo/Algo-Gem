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
