function maxset(A){
        var result = [],
            temp = [],
            negCount = 0;
        for( var i = 0; i < A.length; i++ ){
            if( A[i] >= 0 ){
                temp.push(A[i]);
            } else {
                result.push( temp );
                temp = [];
                negCount += 1
            }
        }
        if( negCount === A.length ) return 0;
        if( A[A.length -1] > 0 ) result.push(temp);
        var maxSum = 0,
            length = 0,
            sum,
            sub;
        for( var j =0, sum = result[j[0]]; j< result.length; j++ ){
          sum = result[j].reduce(function(a, b) { return a + b; }, 0);
          if( sum > maxSum ){
            maxSum = sum;
            length = result[j].length;
            sub = result[j];
          }
          if( sum === maxSum){
            if( result[j].length > length ){
              maxSum = sum;
              length = result[j].length;
              sub = result[j];
            }
          }
        }
        return sub;
  }

console.log( maxset([ 0, 0, -1, 0 ]) )
