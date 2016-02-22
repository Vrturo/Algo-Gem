// Given an array of strings, group anagrams together.

// For example, given: ["eat", "tea", "tan", "ate", "nat", "bat"],
// Return:

// [
//   ["ate", "eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]
// Note:
// For the return value, each inner list's elements must follow the lexicographic order.
// All inputs will be in lower-case.




var groupAnagrams = function(strs) {
    var resultObj = {},
        resultArr = [];
    function addIndexToObj (e) {
        var key = e.split("").sort().join("");
        if (resultObj.hasOwnProperty(key)) {
            resultObj[key].push(e);
        } else {
            resultObj[key] = [e];
        }
    }
    strs.forEach(addIndexToObj);
    for (var key in resultObj) {
        resultArr.push(resultObj[key].sort());
    }
    return resultArr;
};
