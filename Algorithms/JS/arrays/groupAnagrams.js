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


// create an obj to store
// create an result arr to return at the end

// create a function to add an index to the obj
//   create a var that will split down each string in the input, sort it, and join
//   set the  var as the key of the obj
//     if it exists push it into the existing array


// now that we have the function...
// loop through the input and envoke the function to each elements
// once result obj is filled we can push it into the result arr and sort it

// return resultArr

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
