// Given an array of size N, and a number K, find the Kth most common element in an array.

// Example:
// [1,2,2,3,3,4,4,4], 4 => 1


// Logic

// create a freqhash to keep the track of how many times an elemnt occurs
// the freqHash wil have the element as the key, and the number of occurance as the value
// loop through the given array
  // if the key isnt asigned yet set the value to one for its first occurance
  // else add one to the value
// loop through the freqhash and push each key into the storage array
// sort out the storage arr in descending order
// return the kth element - 1 to find the kth most common element

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
