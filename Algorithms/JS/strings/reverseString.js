// Reverse a string

const reverseString = function (input) {
  let result = '';

  function travel(index) {
    if (index >= 0) {
      result += input[index];
      travel(index - 1);
    }
  }
  travel(input.length - 1);
  return result;
};

// console.log(reverseString('test'));

function reverse(str) {
  let rtnStr = '';
  for (let i = str.length - 1; i >= 0; i -= 1) {
    rtnStr += str[i];
  }
  return rtnStr;
}

function reverse(str) {
  const strArr = str.split('');
  const len = str.length;
  const halfIndex = Math.floor(len / 2) - 1;
  for (let i = 0; i <= halfIndex; i += 1) {
    strArr[i] = str[len - i - 1];
    strArr[len - i - 1] = str[i];
  }
  return strArr.join('');
}

// RECURSIVE

function reverse(str) {
  return (str === '') ? '' : reverse(str.substr(1)) + str.charAt(0);
}

// ------------------------------------------------

const reverse = function (input) {
  return input.length === 0 ? '' : input[input.length - 1] + reverse(input.slice(0, input.length - 1));
};


// USING REVERSE

function reverse(str) {
  return (!str || str.length < 2) ? str : str.split('').reverse().join('');
}

// ----------------------------------------------------------------------

const reverseTwo = function (string) {
  const arr = string.split('');
  for (let i = 0, j = string.length - 1; i = Math.floor(string.length / 2) - 1; i += 1) {
    arr[i] = string[j];
    arr[j] = string[i];
    j -= 1;
  }
  return arr.join('');
};
console.log(reverseTwo('strin'))


const reverse = function(string) {
  const arr = string.split('');
  for (let i = 0, j = string.length - 1; i <= Math.floor(string.length / 2) - 1; i += 1) {
    arr[i] = string[j];
    arr[j] = string[i];
    j -= 1;
  }
  return arr.join('');
};
