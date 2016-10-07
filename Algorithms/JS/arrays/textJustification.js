// Given an array of words and a length L,
// format the text such that each line has exactly L characters and is fully (left and right) justified.

// You should pack your words in a greedy approach; that is, pack as many words as you can in each line.
// Pad extra spaces ' ' when necessary so that each line has exactly L characters.

// Extra spaces between words should be distributed as evenly as possible.
// If the number of spaces on a line do not divide evenly between words,
// the empty slots on the left will be assigned more spaces than the slots on the right.

// For the last line of text, it should be left justified and no extra space is inserted between words.

// For example,
// words: ["This", "is", "an", "example", "of", "text", "justification."]
// L: 16.

// Return the formatted lines as:
// [
//    "This    is    an",
//    "example  of text",
//    "justification.  "
// ]
// Note: Each word is guaranteed not to exceed L in length.

var fullJustify = function(words, maxWidth) {
    // if( maxWidth<1 ) return [""];
    // if( words.length <= 1 ) return [addSpaces( maxWidth )];
    var result = [],
        currentRow = "",
        rowLength = 0,
        currentWord,
        temp;
    for( var i=0; i<words.length; i++ ){
        currentWordLength = words[i].length;
        if( rowLength+currentWordLength <= maxWidth ){ // if current word fits in row
            currentRow += words[i]; // add wrod to row
            rowLength += currentWordLength; // add to the row length
        } else { // if current word
            temp = maxWidth - rowLength; // get how many spaces are needed to fill
            currentRow = currentRow + addSpaces(temp); // fill row with spaces
            result.push(currentRow); // push row into result
            currentRow = words[i];
            rowLength = words[i].length;
        }
    }
    if( !result[result.length-1].includes( words[words.length-1] ) ){ // if the last row doesnt include the last word
        temp = maxWidth - rowLength;
        currentRow = addSpaces(temp) + currentRow;
        result.push( currentRow );

    }
    return result;
};

function addSpaces( n ){
    return " ".repeat(n);
}


// ----------------------------------------------

// currentRow = 10
// firstIndex = 0
// word = 3
// characters = 8
// totalSpaces = 16 - 8 = 8
// spacing between two words = 8 / (2) = 4
// 8 % 2 = how many remany extra single spaces left over


// 16 - 11 = 5 spaces
// 5 / 2 = 2 int
// 5 % 2 = 1 remainder
// xxxx  xxx  xxxx
//     |                    |
// ["This", "is", "an", "example", "of", "text", "justification."], 16



var fullJustify = function(words, maxWidth) {
    // if( maxWidth<1 ) return [""];
    // if( words.length <= 1 ) return [addSpaces( maxWidth )];
    var result = [],
        currentRow = "",
        rowLength = 0,
        currentWordLength,
        temp;
    for( var i=0; i<words.length; i++ ){
        currentWordLength = words[i].length;
        if( rowLength+currentWordLength <= maxWidth ){ // if current word fits in row
            currentRow += words[i]; // add wrod to row
            rowLength += currentWordLength; // add to the row length
        } else { // if current word
            temp = maxWidth - rowLength; // get how many spaces are needed to fill
            currentRow = currentRow + addSpaces(temp); // fill row with spaces
            result.push(currentRow); // push row into result
            currentRow = words[i];
            rowLength = words[i].length;
        }
    }
//     if( !result[result.length-1].includes( words[words.length-1] ) ){ // if the last row doesnt include the last word
//         temp = maxWidth - rowLength;
//         currentRow = addSpaces(temp) + currentRow;
//         result.push( currentRow );

//     }
    return result;
};

function addSpaces( n ){
    return " ".repeat(n);
}

var test = ["This", "is", "an", "example", "of", "text", "justification."]

console.log(fullJustify( test, 16 ));





/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */


// var fullJustify = function(words, maxWidth) {
//     if(maxWidth === 0){ return words }
//     var result = [];
//     var wordCount, letterCount;
//     var last = false;
//     for(var i = 0; i < words.length;){
//         letterCount = 0;
//         wordCount = 0;
//         while(i < words.length && wordCount + letterCount + words[i].length <= maxWidth){
//             letterCount += words[i].length;
//             wordCount++;
//             i++;
//         }
//         if(i >= words.length){ last = true; }
//         result.push(buildLine(i-wordCount, wordCount, maxWidth - letterCount, last));
//     }
//     function buildLine(start, wordCount, spaces, last){
//         if(last){ spaces = Math.min(spaces,1); }
//         var remainder = wordCount === 1 || last ? 0 : spaces % (wordCount-1);
//         var space = wordCount === 1 || last ? spaces : Math.floor(spaces / (wordCount - 1));
//         var result = '';
//         for(var i = start; i < start + wordCount; i++){
//             result += words[i];
//             if(remainder > 0){
//                 result += createSpace(space + 1);
//                 remainder--;
//             } else if (wordCount === 1 || i < start + wordCount - 1 ) {
//                 result += createSpace(space);
//             }
//         }
//         if(last){ result += createSpace(maxWidth-result.length)}
//         return result;
//     }
//     function createSpace(n){
//         var result = '';
//         for(var i = 0; i < n; i++){
//             result += ' ';
//         }
//         return result;
//     }

//     return result;
//};
