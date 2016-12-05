// Given the function firstDegree, find the margin of error and return the values a and c.

function firstDegree(x) {
  //f(x) = ax + c
  var data = [];

  var a = Math.floor(Math.random()*100),
      c = Math.floor(Math.random()*100),
      funcVal = 0;

  for(var i = 0; i<200; i++) { //introduce error to the equation
    x = i;
    funcVal = a*x + c;
    funcVal += Math.floor(Math.random()*10);
    data.push(funcVal);
  }

  var answer = [a,c];
  return [data,answer];
}
