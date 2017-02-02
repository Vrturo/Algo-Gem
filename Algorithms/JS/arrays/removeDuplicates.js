// Given an array and a value, remove all the instances of that value in the array.
// return the number of elements in the array once after the operation.

// Example:
// If array A is [4, 1, 1, 2, 1, 3]
// and value elem is 1,
// then new length is 3, and A is now [4, 2, 3]

// param arr : array of integers
// return an integer


// create a hash to keep track of existing elements
// create an outArr to push each elemnt only once
// loop through arr
  // if the current element does not exist
    // push element into outArr
    // set the element as key in our has and value to true
// return iutArr at the end


function removeDuplicates(arr) {
  const exists = {};
  const outArr = [];
  let elm;

  for (let i = 0; i < arr.length; i += 1) {
    elm = arr[i];
    if (!exists[elm]) {
      outArr.push(elm);
      exists[elm] = true;
    }
  }
  return outArr;
}
