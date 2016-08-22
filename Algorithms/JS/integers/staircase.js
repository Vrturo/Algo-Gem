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



// create a loop that runs as many times as n starting from 1. (starting from zero ads an extra empty space)
  // create a variable that gets the difference of n minus the current level we're on
  // create a variable that stores as many spaces as the difference and as many hashtags as on the level the loop is on
  // print out the variable

function staircase(n) {
    for(var i = 1; i <= n; i++){
        var diff = n - i;
        var ht = " ".repeat(diff) + '#'.repeat(i);
        console.log(ht);
    }
}

// -------------------------------------------------

function StairCase(n) {
    for( var i=1; i<=n; i++ ){ // 6 [ , , , , ,#]
        var str = "";
        for( var j=1; j<=n; j++ ){
            if( j <= n-i ){ // 6 <= 6 - 0
                str+=' ';
            } else{
                str+='#'
            }
        }
        console.log(str)
    }
}
