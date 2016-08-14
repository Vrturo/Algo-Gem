// Created these two solutions on just one of the numbers instead of the whole problem to save time

var tally1 = 0;
var pointWays = [2,5,7];

function ways1( val ){ // Recursive Solution
  if( val < 0) return;
  if( val === 0 ){
    tally1 += 1;
    return;
  }
  pointWays.forEach( function(n){
    ways( val - n );
  });
}

function ways1P( val ){ // Solution w/ Promises
  if( val < 0) return new Promise( function(resolve, reject){
    resolve();
  });
  if( val === 0 ){ tally1 += 1; return new Promise( function(resolve, reject){
    resolve();
  }); }
  return new Promise( function (resolve, reject){
    var ps = []
    pointWays.forEach( function(n){
      ps.push( ways1P( val - n) );
    });
    Promise.all(ps).then( function(){
      resolve()
    });
  }) //end promise
}

// was trying to utilize seperate processes to do work in parallel, but this is definitely is not it...that being said
// this was a fun experiment, Just a heads anything > 47 will take over 17 seconds.
ways1P( 10 ).then( function(){ console.log(tally1)} );

// ways1P( 17 ).then( function(){ console.log(tally1)} );

