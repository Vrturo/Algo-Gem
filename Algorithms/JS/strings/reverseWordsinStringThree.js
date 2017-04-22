// Given a string, you need to reverse the order of characters in each word within a sentence 
// while still preserving whitespace and initial word order.

// Example 1:
// Input: "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"
// Note: In the string, each word is separated by single space and there will not be any extra space in the string.

const reverseWords = function(s) {
  const words = s.split(' ');
  let result = '';

  function reverse(word) {
    let temp = '';
    for (let i = word.length; i -= 1;) {
      temp += word[i];
    }
    return temp;
  }
  for (let i = 0; i < words.length; i += 1) {
    result += reverse(`${words[i]} `);
  }
  result = result.slice(0, result.length - 1);
  return result;
}