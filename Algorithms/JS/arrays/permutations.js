// Given a collection of distinct numbers, return all possible permutations.

// For example,
// [1,2,3] have the following permutations:
// [1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], and [3,2,1].


var permute = function(nums) {
    var numsLen = nums.length,
        result = [];

    function getPermutations (currentArray, candidateArray) {
        var candidateArrayLen = candidateArray.length, index;
        if (candidateArrayLen < 1) {
            result.push(currentArray.slice());
        }
        else {
            for (index = 0; index < candidateArrayLen; index++) {
                var nextCandidate = candidateArray.slice();
                currentArray.push(candidateArray[index]);
                nextCandidate.splice(index, 1);
                getPermutations (currentArray, nextCandidate);
                currentArray.pop();
            }
        }
    }
    getPermutations([], nums);
    return result;
};
