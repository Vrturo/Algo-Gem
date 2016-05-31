// function isPalindrome(string){
//  var newStr = string.toUpperCase();

//  var counter = newStr.length -1;
//  for(var i = 0; i < Math.floor(newStr.length/2); i++){
//    if(newStr[i] !== newStr[counter]){
//      return false;
//    }
//    counter--;
//  }
//  return true;
// }


// // isPalindrome("racecar")

// String.prototype.isPalindrome = function(){
//  var newStr = this.toUpperCase();

//  var counter = newStr.length -1;
//  for(var i = 0; i < Math.floor(newStr.length/2); i++){
//    if(newStr[i] !== newStr[counter]){
//      return false;
//    }
//    counter--;
//  }
//  return true;
// }

// "racecar".isPalindrome()

fib = [0, 1]
function bounding(n){
  // var fib = [0, 1];
  f = fib;
  function recurse(i){
    var sum = f[i] + f[i+1]
    if(sum === f[i]){
      // console.log([sum, sum])
      return [sum, sum]
    }
    if(n < sum){
      f.push(sum);
      return [f[i+1], f[i+2]]
    } else{
      f.push(sum);
      return recurse(i + 1);
    }
  }
  return recurse(0)
}

console.log(bounding(7))
// console.log(fib)
// console.log(bounding(7))
// console.log(fib)


// function rec(arr){
//  var result = [];
//  if(arr.length === 0){
//    return result;
//  } else{
//    return rec(result.push(arr.pop()));
//  }
// }

// console.log(rec([1,2,3]))
// var results = []
// function rec(arr,i){
//   i = i || 0 ;
//   if(i > arr.length -1){
//     return results;
//   }
//   else{
//     results.push(arr[i])
//     return rec(arr,i+1)
//   }
// }

// console.log(rec([1,2,3]))
