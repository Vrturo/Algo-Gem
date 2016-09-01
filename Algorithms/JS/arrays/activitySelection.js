// The activity selection problem is a combinatorial optimization problem concerning the selection of non-conflicting activities
// to perform within a given time frame, given a set of activities each marked by a start time (si) and finish time (fi).
// The problem is to select the maximum number of activities that can be performed by a single person or machine,
// assuming that a person can only work on a single activity at a time.

// You are given n activities with their start and finish times.
// Select the maximum number of activities that can be performed by a single person,
// assuming that a person can only work on a single activity at a time.

// Example:

// Consider the following 6 activities.
//      start  =  [1, 3, 0, 5, 8, 5];
//      finish =  [2, 4, 6, 7, 9, 9];

// The maximum set of activities that can be executed by a single person is [0, 1, 3, 4]


function activitySelect( start, finish ){
    var result = [],
        last;

    for( var i = 0; i<start.length; i++ ){
        if( start[i-1] !== undefined ){ // 0 can be falsy
            if( start[i] < finish[i] && last < start[i]){
               result.push(i);
               last = finish[i];
            }
        } else{
          if( start[i] < finish[i] ){
            result.push(i);
            last = finish[i];
          }
        }
    }
    return result;
}
var start  =  [1, 3, 0, 5, 8, 5];
var finish =  [2, 4, 6, 7, 9, 9];
console.log(activitySelect( start, finish ))
