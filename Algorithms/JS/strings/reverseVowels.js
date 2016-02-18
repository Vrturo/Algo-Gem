// Given an input is a string, return a string that has the vowels in reverse order
// assume all letters are lowercase


//ex. Input: "united states"
//Output: "enated stitus"

var reverseVowels = function(input){
    var input = input.split('');
    var i = 0;
    var j = input.length-1;
    var vowelLib = {
        a: true,
        e: true,
        i: true,
        o: true,
        u: true
    }

    while (i < j){
        if (vowelLib[input[i]]){
            if (vowelLib[input[j]]){
                var temp = input[i];
                input[i] = input[j];
                input[j] = temp;
                i++;
                j--;
            } else {
                j--;
            }
        } else {
            i++;
        }
    }
    input = input.join('');
    return input;
}
