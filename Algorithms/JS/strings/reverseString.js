// Reverse a string

var reverseString = function(input){
  result = ""

  function travel(index){
    if (index < 0){
      return
    }else{
      result += input[index]
      travel(index-1)
    }
  }
    travel(input.length - 1);
    return result
}


var reverse = function(input){
  if (input.length == 0){
    return ""
  };
  return input[input.length - 1] + reverse(input.slice(0, input.length - 1))
}

function reverse(str){
  var rtnStr = '';
  for(var i = str.length-1; i>=0;i--){
    rtnStr +=str[i];
  }
  return rtnStr;
}

function reverse(str) {
  str = str.split('');
  var len = str.length,
      halfIndex = Math.floor(len / 2) - 1,
      revStr;
  for (var i = 0; i <= halfIndex; i++) {
    revStr = str[len - i - 1];
    str[len - i - 1] = str[i];
    str[i] = revStr;
  }
  return str.join('');
}

// RECURSIVE

function reverse (str) {
    if (str === "") {
        return "";
    } else {
        return reverse(str.substr(1)) + str.charAt(0);
    }
}

// using reverse
function reverse(str){
  if(!str || str.length <2) return str;

  return str.split('').reverse().join('');
}


