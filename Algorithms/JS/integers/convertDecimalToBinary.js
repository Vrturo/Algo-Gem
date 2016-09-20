// Convert decimal ( '5' ) to it's binary equivelant ('101')

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


// Input: Integer
// 5

// Output: String
// ex. '101'

function DecimalToBinary(DecimalValue){
    var BinaryValue = '';
    // Loop from 2^64/2 to 1
    for (var i=64; i>=1; i--){
      // Is 2^i/2 within DecimalValue?
      if(DecimalValue >= Math.pow(2,i)/2){
        // If so, add a 1 to BinaryValue and subtract 2^i/2 from DecimalValue
        BinaryValue = BinaryValue+'1';
        DecimalValue = DecimalValue - (Math.pow(2,i)/2);
      }
      else if(BinaryValue.indexOf("1") != -1){
        // If not, add a 0, but only if there is already a 1 in the value
        BinaryValue = BinaryValue+'0';
      }
    }
    return BinaryValue;
}

// --------------------------------------------------------------------

function parse( string ){
    return parseInt( string, 2 ); // The parseInt function converts strings to numbers,
                                  // and it takes a second argument specifying the base in which the string representation is:
}


