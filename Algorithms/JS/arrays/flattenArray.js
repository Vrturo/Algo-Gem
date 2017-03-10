/**
 * Flatten a nested array using Helper Method of Recursion
 *
 * Input:   Array of Integers and Arrays
 * Output:  Array of Integers
 *
 * Example: flatten([1, [2, 3, [4]], 5, [[6]]]) => [1, 2, 3, 4, 5, 6]
 **/


// creata variable result to return as our flattened array at the end
// create helper function that takes in:
  // the current Obj we're in
  // our result array to push our values
  // our function loops through our current object
    // if the current item in the current object is a number
      // push the item into the result aray
    // else call our helper onto our nested object

// call our function on our outermost array


function flatten(arr) {
  const result = [];

  function helper(currObj) {
    for (let i = 0; i < currObj.length; i += 1) {
      if (typeof currObj[i] === 'number') {
        result.push(currObj[i]);
      } else {
        helper(currObj[i])
      }
    }
    return result;
  }
  return helper(arr);
}

// -----------------------------

function flatten(element) {
  if (Number.isInteger(element)) return element;
  const work = [];

  for (let i = 0; i < element.length; i += 1) {
    work = work.concat(flatten(element[i]));
  }
  return work;
}

var ex = [1, [2, 3, [4]], 5, [[6]]];
console.log(flatten(ex));


