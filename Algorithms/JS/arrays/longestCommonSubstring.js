// Write a function to find the longest common prefix string amongst an array of strings.

var longestCommonPrefix = function(strs) { //120 ms runtime
    if(strs.length < 1) return "";
    var sortedArr = strs.sort(),
        a1 = sortedArr[0],
        a2 = sortedArr[sortedArr.length-1],
        len = a1.length,
        i = 0;

    while( (i<len) && a1.charAt(i) === a2.charAt(i) ) i++;
    return a1.substring(0, i);
};

// Horizontal scanning
var longestCommonPrefix = function(strs) { //120 ms runtime
    if( strs.length < 1 ) return "";
    var prefix = strs[0];

    for( var i =0; i < strs.length; i++ ){
        while( strs[i].indexOf(prefix) !== 0 ){
            prefix = prefix.substring(0, prefix.length - 1);
            if( !prefix ) return "";
        }
    }
    return prefix;
};


// ----------Unfinished Solution-----------------------------

// var longestCommonPrefix = function(strs, low, mid) {
//     // A Divide and Conquer based function to find the
//     // longest common prefix. This is similar to the
//     // merge sort technique
//     var result = "";
//     if( strs.length < 1 ) return "";

//         if( low === undefined ) low = 0;
//         var high = strs.length -1;

//     if( low === high ) return strs[low];

//     if( high > low ){
//         // Same as (low + high)/2, but avoids overflow for
//         // large low and high
//         mid = low + (high - low) / 2;

//         var str1 = longestCommonPrefix( strs, low, mid ),
//             str2 = longestCommonPrefix( strs, mid+1, high );

//         return commonPrefixUtil( str1, str2, result );
//     }
// };

// function commonPrefixUtil( str1, str2, result ){
//         var len;
//         str1.length > str2.length ? len = str1.length : len = str2.length;

//         while( (i< len) && str1.charAt(i) === str2.charAt(i) ) i++;
//         if( str1.substring(0, i).length > result ) result = str1.substring(0, i);
//         return result;
// }

// ------ Unfinished Solution ---------------------------------
// var longestCommonPrefix = function(strs) {
//     if( strs.length === 0 ) return "";
//     var map = {},
//         i;
//     // loop through strings
//         // add every prefix to map
//         // increase the count if it exists, create if it doesnt
//     // loop through map to get highest count prefixes
//     // return longest count pre fix

//     for( i = 0; i < strs.length; i++ ){ // loop through string
//         helper( strs[i], 0, "" );
//     }

//     function helper(string, index, buildUp){
//         if( index === string.length ){
//             return;
//         }else{
//             buildUp = buildUp + string[index];
//             map[buildUp] ? map[buildUp] += 1 : map[buildUp] = 1;
//             index++;
//         }

//     }

//     if ( Object.keys(map).length < 1 ) return "";
//     return Object.keys(map).reduce(function(a, b){ return map[a] > map[b] ? a : b });
// };
