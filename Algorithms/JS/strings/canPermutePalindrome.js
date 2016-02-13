// Given a string, determine if a permutation of the string could form a palindrome.

// For example,
// "code" -> False, "aab" -> True, "carerac" -> True.


var canPermutePalindrome = function(s) {
    var freq = {},
        splitStr = s.split(''),
        odd = 0;
    for(var i = 0; i < splitStr.length; i++){
        var item = splitStr[i];
        if(freq[item]){
            freq[item] += 1;
        }
        else{
            freq[item] = 1;
        }
    }
    for (var key in freq){
        if (freq[key]% 2 !== 0){
            odd += 1;
        }
    }
    if (odd<=1){
        return true;
    }
    else{
        return false;
    }
};
