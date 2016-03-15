/**
 *
 * Problem: paper rock scissors
 *
 * Write function paperRockScissors that takes in a number n
 * and returns all the possibilities that exist for playing
 * n rounds of paper rock scissors.
 *
 * For example, if n = 2, you would return:
 *
 * [ [ 'paper', 'paper' ],
  [ 'paper', 'rock' ],
  [ 'paper', 'scissors' ],
  [ 'rock', 'paper' ],
  [ 'rock', 'rock' ],
  [ 'rock', 'scissors' ],
  [ 'scissors', 'paper' ],
  [ 'scissors', 'rock' ],
  [ 'scissors', 'scissors' ] ]
 *
 *
 */

var paperRockScissors = function(n) {
    var result = [];
    function helper(buildUp){
      if(buildUp.length === n){
        result.push(buildUp.slice());
        return;
      }
      buildUp.push('paper')
      helper(buildUp);
      buildUp.pop();
      buildUp.push('rock')
      helper(buildUp);
      buildUp.pop();
      buildUp.push('scissors')
      helper(buildUp);
      buildUp.pop();
    }
    helper([])
    return result;
};

var paperRockScissors = function(n) {
    var result = [];
    var possibilities = ['paper', 'rock', 'scissors'];
    function helper(buildUp){
      if(buildUp.length === n){
        result.push(buildUp.slice());
        return;
      }
      for(var i = 0; i<possibilities.length; i++){
        buildUp.push(possibilities[i]);
        helper(buildUp);
        buildUp.pop();
      }
    }
    helper([])
    return result;
};
