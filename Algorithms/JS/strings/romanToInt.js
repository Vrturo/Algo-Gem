// Given a roman numeral, convert it to an integer.

// Input is guaranteed to be within the range from 1 to 3999.

var romanToInt = function(s) {

    var map = {
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
            if(map[s[i + 1]] > map[s[i]]){
                ret = ret + (map[s[i + 1]] - map[s[i]]);
                i++;
                continue;
            }
        }

        ret = ret + map[s[i]];
    }

    return ret;

};

