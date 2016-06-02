// Your teacher has given you the task of drawing a staircase structure. Being an expert programmer, you decided to make a program to draw it for you instead. Given the required height, can you print a staircase as shown in the example?

// Input
// You are given an integer  depicting the height of the staircase.

// Output
// Print a staircase of height  that consists of # symbols and spaces. For example for , here's a staircase of that height:

//      #
//     ##
//    ###
//   ####
//  #####
// ######
// Note: The last line has 0 spaces before it.


function staircase(n) {
    for(var i = 1; i <= n; i++){
        var diff = n - i;
        ht = " ".repeat(diff) + '#'.repeat(i);
        console.log(ht);
    }
}
