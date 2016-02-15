// Write a program that iterates the integers from 1 to 100, printing the numbers to the screen.
// For each number that is a multiple of 3, however, print "Fizz" instead of the number.
// For multiples of 5 print "Buzz" instead of the number.
// For numbers that are multiples of both print "FizzBuzz."

function fizzBuzz() {
    var res = "";
    var resStr = ""
    for (var i = 1; i < 100; i++) {
        res = "";
        if (i % 3 == 0) { res = "Fizz"; }
        if (i % 5 == 0) { res += "Buzz"; }
        if (!res) { res = i; }
        resStr += res + " ";
    }
    return resStr;
}
