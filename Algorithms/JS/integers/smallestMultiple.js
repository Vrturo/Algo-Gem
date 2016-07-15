// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

function smallestMultiple(multiple){
  var arr = [11,12,13,14,15,16,17,18,19,20];

  console.log(multiple);
  for( var i = arr.length - 1; i--; ){

    if( multiple % arr[i] !== 0){
        multiple = multiple + 20;
        return smallestMultiple( multiple );
    }

  }
  return multiple;
}

console.log( smallestMultiple(937070) );
