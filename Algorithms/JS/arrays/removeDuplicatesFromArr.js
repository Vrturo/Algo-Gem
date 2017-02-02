Remove Duplicates from Array

Given an array and a value, remove all the instances of that value in the array.
Also return the number of elements left in the array after the operation.
It does not matter what is left beyond the expected length.

Example:
If array A is [4, 1, 1, 2, 1, 3]
and value elem is 1,
then new length is 3, and A is now [4, 2, 3]

Try to do it in less than linear additional space complexity.

//param A : array of integers
//param B : integer
//return an integer


function removeElement(A, B){
  var map = {};
  for (var i = 0; i < A.length; i += 1) {
    if(map[A[i]] === undefined){
       map[A[i]] = 1;
    } else {
        map[A[i]] += 1;
    }
  }
  var result = [];
  for(var k in map){
      if (map[k] === 1) result.push(k);
  }
  return result.length, result;
}

console.log()
