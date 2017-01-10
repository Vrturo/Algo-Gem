module.exports = {
  //param A : integer
  //return a array of integers
  allFactors : function(A){
        var result = [];
        for(var i = 1; i<=A; i++){
            if(A % i === 0) result.push(i);
        }
        return result
  }
};

module.exports = {
  //param A : integer
  //return a array of integers
  allFactors : function(A){
        var result = [1];
        for(var i = 2; i<A; i++){
            if(A % i === 0) result.push(i);
        }
        if(A > 1) result.push(A);
        return result;
  }
};
