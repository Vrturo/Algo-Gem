// Given an input is a string, return a string that has the vowels in reverse order
// assume all letters are lowercase


//ex. Input: "united states"
//Output: "enated stitus"



var reverseVowels = function(s) {
    var dict = {
        a: true,
        e: true,
        i: true,
        o: true,
        u: true
    },
    arr = s.split(''),
    l = 0,
    r = arr.length - 1;

    while (l < r) {
        // find index of vowel
        while (!dict[arr[l].toLowerCase()] && l < r) {
            l++;
        }
        while (!dict[arr[r].toLowerCase()] && l < r) {
            r--;
        }

        // swap
        var tmp = arr[l];
        arr[l] = arr[r];
        arr[r] = tmp;

        // continue
        l++;
        r--;
    }
    return arr.join('');
}


// --------------------------------------------------

var reverseVowels = function(s) {
    var input = s.split(''),
        i = 0,
        j = input.length-1,
        vowelLib = {
        a: true,
        e: true,
        i: true,
        o: true,
        u: true,
        A: true,
        E: true,
        I: true,
        O: true,
        U: true,

    };

    while( i < j ){
        if( vowelLib[input[i]] ){
            if( vowelLib[input[j]] ){
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
};
