// Remove duplicate numbers from an array
// return an array of each number once

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
