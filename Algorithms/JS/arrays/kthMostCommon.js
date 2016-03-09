// Given an array of size N, and a number K, find the Kth most common element in an array.

// Example:
// [1,2,2,3,3,4,4,4], 4 => 1




function common(arr, k){
  var freqHash = {},
      storage = [];

  for(var i = 0; i < arr.length; i++){
    if (freqHash[arr[i]] === undefined){
      freqHash[arr[i]] = 1;
    }
    else{
      freqHash[arr[i]] += 1;
    }
  }
  for(var key in freqHash){
    storage.push(key);
  }
  storage = storage.sort(function(a,b){return b - a});
  return storage[k-1];
}
