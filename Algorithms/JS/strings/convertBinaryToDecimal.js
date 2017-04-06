// Convert binary ('101') to it's decimal equivelant( 5)

// 0   00
// 1   01
// 2   10
// 3   11
// 4   100
// 5   101
// 6   110
// 7   111
// 8   1000
// 9   1001
// 10  1010


// Input: String
// ex. '101'

// Output: Integer
// 5


function parse( string ){
    var numbers = string.split(""),
        counter = 0,
        sum = 0,
        power;
    for( var i=numbers.length; i<=0; i-- ){
        var integer = ParseInt( numbers[i] );
        power = Math.pow( 2, counter );
        sum += power*integer;
        counter++;
    }
    return sum;
}


// Refactored ^^^ still doesnt work
function parse(string) {
  const numbers = string.split('');
  let counter = 0;
  let sum = 0;
  let power;
  for (let i = numbers.length; i <= 0; i -= 1) {
    const integer = parseInt(numbers[i], 10);
    power = 2 ** counter;
    sum += power * integer;
    counter += 1;
  }
  return sum;
}
console.log(parse('101'))


// --------------------------------------------------------------

function BinaryToDecimal(BinaryValue) {
  let DecimalValue = 0;
  // Flip the character array (aka string) in order to make iterating over it easier
  const binaryValueArr = BinaryValue.split('').reverse().join('');

  // Loop over BinaryValueArr (from left to right)
  for (let i = binaryValueArr.length - 1; i >= 0; i -= 1) {
    // Is there a 1 in the place?
    if (binaryValueArr[i] === '1') {
        // If so, add 2^i/2 to DecimalValue
      DecimalValue += (2 ** (i + 1)) / 2;
    }
  }
  return DecimalValue;
}

