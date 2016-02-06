// Reverse a string

// var reverseString = function(input){
//   result = ""

//   function travel(index){
//     if (index < 0){
//       return
//     }else{
//       result += input[index]
//       travel(index-1)
//     }

//     travel(input.length - 1);
//     return result
//   }
// }


var reverse = function(input){
  if (input.length == 0){
    return ""
  };
  return input[input.length - 1] + reverse(input.slice(0, input.length - 1))
}
