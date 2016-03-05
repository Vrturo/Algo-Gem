// Given a collection of distinct numbers, return all possible permutations.

// For example,
// [1,2,3] have the following permutations:
// [1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], and [3,2,1].




// Logic
// create a result array to push our permutations in and return
// create a get getPermutations function that takes in an array, and our input
  // create a base case, if input array is empty push copy of current array into result
  // if input array is not empty, loop through input array
  // else
    // create a copy of our input array for our next input
    // push the item of the inputArr that the for loop is on, into the currentArr
    // splice the index of the nextInput array
    // run the getPermutations function on the current array and nextInput array
    // pop last array in current array

  // run get permutations function on an empty arr and nums or our input
  // return result


var permute = function(nums) {
    //nums are distinct numbers.
    var result = [];

    function getPermutations (currentArray, inputArr) {
        if (inputArr.length < 1) {
            result.push(currentArray.slice()); //Here we must do a copy. Because an array is an object,
                                               // every time we're passing its reference into a new function.
        } else {
            for (var i = 0; i < inputArr.length; i++) {
                var nextInput = inputArr.slice(); //Same reason, array is object, copy is needed.
                currentArray.push(inputArr[i]);
                nextInput.splice(i, 1);
                getPermutations (currentArray, nextInput);
                currentArray.pop();
            }
        }
    }

    getPermutations([], nums);
    return result;
};
