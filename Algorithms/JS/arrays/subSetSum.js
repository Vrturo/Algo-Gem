// Given a set of non-negative integers, and a value sum,
// determine if there is a subset of the given set with sum equal to given sum.

// Examples: set = [3, 34, 4, 12, 5, 2], sum = 9
// Output:  True  //There is a subset (4, 5) with sum 9.



var combinationSum = function(candidates, target) {
    var result = [];

    function backtrack( start, sum, buildUp ){
        if( sum === target ){
            result.push(buildUp);
        } else if( sum < target ){
            for( var i = start; i < candidates.length; i++ ){
                buildUp.push( candidates[i] );
                sum += candidates[i];
                backtrack( i, sum, buildUp );
                sum -= candidates[i];
                buildUp.pop();
            }
        }
    }
    backtrack( 0, 0, [] );
    return result;
};



var set = [3, 34, 4, 12, 5, 2]
console.log(combinationSum( set, 3 ))

