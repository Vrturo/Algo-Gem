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

function marginOfE(dataSet){
    var data = dataSet[0],
        answer = dataSet[1],
        c = dataSet[0][0];

    for( var i=0, total=0, min=Number.MAX_VALUE, max=0; i<data.length; i++ ){
        total += data[i];
        if( min > data[i] ) min = data[i];
        if( max < data[i] ) max = data[i];
    }
    var difference = max - min,
        solution = max - difference
        start = (dataSet[0][1] - c) - difference; // 70 - 9

    for( var k=0; k<difference; k++ ){
        start+=k;
        if( [k, c] === answer ) return [k,c];
    }

    return [data, [start, c], answer]
}

console.log(marginOfE( firstDegree(1) ))
