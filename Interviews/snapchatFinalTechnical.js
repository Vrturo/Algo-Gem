Snapchat Final Technical Interview. Front End Engineer Role

10 min Intro
10 min Resume Project Talk
  - Asked for detailed information on (Stack, challenges, decisions, etc..)
30 min on algorithm
10 min on JS concepts( Promises, ES6 classes and functions)



// What would be an efficient algorithm to get all combinations of point-accumulations necessary to get a certain score N - N?
// [2, 5, 7] -> how you can score

// 10-7, 2, 5 or 7.
// 0-0, 2-0, 4-0, 6-0, 8-0, 10-0, 10-2, 10-7 -> 1 way
// 0-0, 2-0, 4-0, 6-0, 8-0, 10-0, 10-2, 10-5 10-7 -> 1 way
// 0-0, 2-0, 4-0, 6-0, 8-0, 10-0, 10-7 -> 1 way
// 0-0, 2-0, 4-0, 6-0, 8-0, 10-0, 10-5 10-7 -> 1 way
// .....


// input: 2 params, (integer, integer) -> positive // not always a perfect score
// output: integer, if score isnt possible return 0

function getScores( a, b ){
    var points = [2, 5, 7]; // only possible ways you can score

}
