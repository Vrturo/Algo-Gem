Given an array and a value, remove all the instances of that value in the array.
return the number of elements in the array once after the operation.

Example:
If array A is [4, 1, 1, 2, 1, 3]
and value elem is 1,
then new length is 3, and A is now [4, 2, 3]

// param arr : array of integers
// return an integer

function removeDuplicates(arr){
  var count = {};
  var noDups = [];

  for (var i = 0;  i < arr.length; i++){
    var item = arr[i]
    if (!count[item]){
      noDups.push(item);
      count[item] = true;
    }
    else {
      count[item];
    }
  }
  return noDups;
}


function removeDuplicates(arr){
  var exists ={},
      outArr = [],
      elm;

  for(var i =0; i<arr.length; i++){
    elm = arr[i];
    if(!exists[elm]){
      outArr.push(elm);
      exists[elm] = true;
   }
  }
  return outArr;
}
