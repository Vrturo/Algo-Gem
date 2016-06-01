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

f = [0, 1];
function fib(n){
    function recurse(i){
      if(f[n]){
        return f[n];
      }
      else{
        var sum = f[i - 1] + f[i];
        f.push(sum);
        return recurse(i+1);
      }
    }
    return recurse(f.length -1)
}
console.log(fib(5))
console.log(f)
// console.log(fib(2));
// console.log(f)

// f = [0, 1];
// function bounding(n){

//  function recurse(curr){
//    var sum = f[curr] + f[curr + 1];

//    if(n === f[curr]){
//      return [f[curr], f[curr]];
//    }
//    if(f[curr] < n && f[curr+1] > n){
//      return [f[curr], f[curr+1]];
//    } else if(f[curr] > n){
//      return recurse(curr -1)
//    }
//    else{
//      f.push(sum);
//      return recurse(curr + 1);
//    }
//  }

//  return recurse(f.length -2);
// }
// console.log(bounding(8))
// console.log(f)
// console.log(bounding(2));
// console.log(f)
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
