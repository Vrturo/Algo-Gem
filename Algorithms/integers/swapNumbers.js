// How would you swap two numbers without using a temporary variable?

function swapNumb(a, b){
  b = b -a;
  a = a+ b;
  b = a-b;
}


// WTFFFFF idk why
function swapNumb(a, b){
  b = a ^ b;
  console.log(a, b)
  a = a ^ b;
  console.log(a, b)
  b = a^b;
  console.log(a, b)
}
