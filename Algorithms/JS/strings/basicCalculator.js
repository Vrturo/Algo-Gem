// Implement a basic calculator to evaluate a simple expression string.

// The expression string may contain open ( and closing parentheses ),
// the plus + or minus sign -, non-negative integers and empty spaces .

// You may assume that the given expression is always valid.

// Some examples:

// "1 + 1" = 2
// " 2-1 + 2 " = 3
// "(1+(4+5+2)-3)+(6+8)" = 23

// Note: Do not use the eval built-in library function.

/**
 * @param {string} s
 * @return {number}
 */


var calculate = function(s) {
    var result = 0,
        num = 0,
        sign = 1,
        stack = [];

    for( var i = 0; i < s.length; i++ ){
        if( Number(s[i]) || s[i] === '0' ){
            num = JSON.stringify(num)+s[i];
            num = Number(num);
        }else if( s[i] === '+' ){
            result += sign * num;
            num = 0;
            sign = 1;
        }else if( s[i] === '-' ){
            result += sign * num;
            num = 0;
            sign = -1;
        }else if( s[i] === '(' ){
            stack.push(result);
            stack.push(sign);
            sign = 1;
            result = 0;
        }else if( s[i] == ')' ){
            result += sign * num;
            num = 0;
            result *= stack.pop();
            result += stack.pop();
        }
    }

    if( num !== 0 ) result += sign * num;
    return result;
};
