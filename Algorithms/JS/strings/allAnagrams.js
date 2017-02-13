// The challenge is to write the function that returns all anagrams

// Note: Anagrams are case insensitive, ignore all non-alphanumeric characters,
// input will always be two strings. Also: two identical words may be considered to be an
// edge case of an anagram, but for this kata they are still correct anagrams.

// Description:
// "Any word or phrase that exactly reproduces the letters in another order is an anagram." (Wikipedia).
// Add numbers to this definition to be more interest.

// Examples of anagrams:

// 'abc' = ['abc','acb', 'bca', 'bac', 'cab', 'cba']

// create a variable called split that splits our characters in individual char in a string
// create results variable which is an array to return at the end
  // create a helper function called recurse that takes two arguments
  // first argument is gonna be builtUp because it's the array we're gonna build up
  // second is passedOn because

var allAnagramsRecursive = function(string){
  var split = string.split(''),
      results = [];

  var recurse = function(builtUp, passedOn){
    if (passedOn.length === 0){
      results.push(builtUp.join(''));
      return;
    }
    for (var i=0; i< passedOn.length; i++){
      var temp = passedOn.splice(i, 1);
      builtUp.push(temp);
      recurse(builtUp, passedOn);
      builtUp.pop();
      passedOn.splice(i, 0, temp);
    }
  }
  recurse([], split);
  return results;
}
allAnagramsRecursive('dad')
