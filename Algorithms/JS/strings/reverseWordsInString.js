// Given an input string, reverse the string word by word.

// For example,
// Given s = "the sky is blue",
// return "blue is sky the".


var reverseWords = function(str) {
  var result = [],
      strArr = str.split(" ");

  for(var i=strArr.length; i>=0; i--){
    result.push(strArr[i]);
  }
  return result.join(" ");
};

