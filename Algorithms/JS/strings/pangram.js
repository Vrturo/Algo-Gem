// Input Format

// Input consists of a string .

// Constraints
// It may contain spaces, lower case and upper case letters.
// Lower-case and upper-case instances of a letter are considered the same.

// Output Format

// Output a line containing pangram if  is a pangram, otherwise output not pangram.

// Sample Input

// Input #1

// We promptly judged antique ivory buckles for the next prize
// Input #2

// We promptly judged antique ivory buckles for the prize
// Sample Output

// Output #1

// pangram

// Output #2

// not pangram


function isPangram(input) {
    var letters = 'abcdefghijklmnopqrstuvwxyz';
    input = input.toLowerCase().replace(/[^a-z]/g,'');
    for (var i = 0; i < 26; i++){
        if (input.indexOf(letters[i]) < 0)  return "not pangram"
    }
    return "pangram"
}
