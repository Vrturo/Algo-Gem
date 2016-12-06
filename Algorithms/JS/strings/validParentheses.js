// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.

var isValid = function(s) { // 100 ms runtime
    var stack = [],
        i;
    s = s.split("");

    for( i = 0; i < s.length; i++ ){
        switch( s[i] ){
            case "(":
                stack.unshift( ")" );
                break;
            case "[":
                stack.unshift( "]" );
                break;
            case "{":
                stack.unshift( "}" );
                break;
            default:
                if( stack.shift() !== s[i] )
                    return false;
                break;
        }
    }

    if( stack.length === 0 ) return true;
    return false;
};

// --------------------------------------------------------

var isValid = function(s) {
    var stack = [];
    s = s.split("");

    for(var i = 0; i < s.length; i++){
        if(s[i] === "("){
            stack.unshift(")");
        }else if(s[i] === "["){
            stack.unshift("]");
        }else if(s[i] === "{"){
            stack.unshift("}");
        }else if(stack.shift() !== s[i]){
            return false;
        }
    }

    if(stack.length === 0)
        return true;
    return false;
};

// -----------------------------------------

var isValid = function(s) { // 108ms runtime
    var valid = true,
        pair = {
            '(': ')',
            '[': ']',
            '{': '}'
        },
        nowWaitingFor = [],
        i;

    for ( i = 0; i < s.length; i++ ) {
        var nowChar = s.charAt(i);
        if ( nowChar.match(/[(\[\{]/) ) {
            nowWaitingFor.unshift(pair[nowChar]);
        } else if ( nowChar.match(/[)\]\}]/) ) {
            if ( nowWaitingFor[0] !== nowChar ) {
                valid = false;
                break;
            } else {
                nowWaitingFor.splice( 0, 1 );
            }
        }
    }
    if ( nowWaitingFor.length !== 0 ) {
        valid = false;
    }
    return valid;
}

// ----------------------------------------

var isValid = function(s) { // 108ms runtime
    var storage = [];
    for( var l of s )
        if( ( i="({[]})".indexOf(l) )>-1 )
            if( storage[storage.length-1]+i===5 )
                storage.length--;
            else
                storage.push( i );
    return storage.length===0;
};

