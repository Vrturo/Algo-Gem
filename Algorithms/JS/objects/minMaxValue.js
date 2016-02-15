//Returns the property with the greatest numeric value in an object along with it's key in an array [key,value].

    function maxVal(obj){

      return Object.keys(obj).reduce(function(currentVal, key){
        return obj[key] > currentVal[1] ? [key,obj[key]] : currentVal
      }, ["key",-Infinity]);

    },



//Returns the property with the least numeric value in an object along with it's key in an array [key,value].
    function minVal(obj){

      return Object.keys(obj).reduce(function(currentVal, key){
        return currentVal[1] > obj[key] ? [key,obj[key]] : currentVal
      }, ["key",Infinity]);

    }
