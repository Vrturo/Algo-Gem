// Given a roman numeral, convert it to an integer.

// Input is guaranteed to be within the range from 1 to 3999.

/**
 * @param {string} s
 * @return {number}
 */

var romanToInt = function(s) { // 332 ms - 94%
    var map = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000 },
        prev = 0,
        result = 0;

    for (var i = s.length - 1; i >= 0; i--) {
        if ( map[s[i]] < prev ) { // if prev char is bigger or same, subtract from result
            result -= map[s[i]]; // 'IV' -> 4
        } else { //if prev char is smaller, add valeu to result
            result += map[s[i]];// 'VI' -> 6
        }
        prev = map[s[i]]; // set current value to prev for next
    }
    return result;
};

// ---------------------------------------------------------

var romanToInt = function(s) {  // 186 ms

    var lib = {
        "I": 1, //can be in front of "V" or "X"
        "V": 5,
        "X": 10, //can be in front of "L" or "C"
        "L": 50,
        "C": 100, //can be in front of "D" or "M"
        "D": 500,
        "M": 1000
    };
    var ret = 0;
    for(var i = 0; i < s.length; i++){
        if((i < s.length - 1) && (s[i] === "I" || s[i] === "X" || s[i] === "C")){
            if(lib[s[i + 1]] > lib[s[i]]){
                ret = ret + (lib[s[i + 1]] - lib[s[i]]);
                i++;
                continue;
            }
        }

        ret = ret + lib[s[i]];
    }

    return ret;

};
