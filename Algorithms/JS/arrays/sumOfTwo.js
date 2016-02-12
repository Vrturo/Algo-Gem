// From a unsorted array, check whether there are any two numbers that will sum up to a given number



function sumFinder(arr, sum){
      var differ = {},        // store the difference of sum and element. And then when new element comes
                              // if difference is the object,
                              // then i have a pair that sums up to the desired sum.
      len = arr.length,
      substract;

  for(var i =0; i<len; i++){
     substract = sum - arr[i];

     if(differ[substract])
       return true;
     else
       differ[arr[i]] = true;
  }

  return false;
}


function sumFinder(arr, sum){
  var len = arr.length;

  for(var i =0; i<len-1; i++){
     for(var j = i+1;j<len; j++){
        if (arr[i] + arr[j] == sum)
            return true;
     }
  }

  return false;
}
