// Write an algorithm to determine if a number is "happy".

// A happy number is a number defined by the following process:
// Starting with any positive integer, replace the number by the sum of the squares of its digits,
// and repeat the process until the number equals 1 (where it will stay),
// or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy numbers.

// Example: 19 is a happy number

// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1

var isHappy = function(num) {
    var m, n;
    var c = [] ;

    while(num != 1 && c[num] !== true)
    {
        c[num] = true ;
        m = 0 ;
        while (num > 0) {
            n = num % 10 ;
            m += n * n ;
            num = (num  - n) / 10 ;
        }
        num = m ;
    }
    return (num == 1) ;
};

var isHappy = function(num){
    function stringify(n){return String(n)}
    var numStr = stringify(num),
        total = 0,
        done = false;
    while(done === false){
        for(var i = 0; i < numStr.length; i++){
            total += Number(numStr[i]) * Number(numStr[i]);
        }
        (total === 1) ? done = true : numStr = stringify(total);
        console.log(total);
    }
    return ((total === 1) ? true : false);
};
