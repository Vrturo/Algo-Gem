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

// ----------------------------------------------------
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
    if( maxWidth < 1 ) return words;
    var result = [],
        index=0,
        lastWord = false;

    for( var i = 0; i<words.length; ){
            var rowCharacters = 0,
                wordsinRow = 0;
            while( i< words.length && wordsinRow+rowCharacters+words[i].length <= maxWidth ){
                rowCharacters+=words[i].length;
                wordsinRow++;
                i++;
            }
            if( i >= words.length ) lastWord = true;
            var spaces = maxWidth-rowCharacters,
                spacePerWord = (wordsinRow-1 !== 0) ? Math.floor( spaces/(wordsinRow-1) ) : spaces,
                wordSet = words.slice(index, index+wordsinRow),
                leftOver = spaces%(wordsinRow-1),
                currentRow = wordSet[0];
            if( !lastWord ){
                if( wordsinRow > 1){
                    for( var j=1; j<wordSet.length; j++ ){
                        if( leftOver>0 ){
                            currentRow = currentRow+addSpaces(spacePerWord+1)+wordSet[j];
                            leftOver-=1;
                        } else {
                            currentRow = currentRow+addSpaces(spacePerWord)+wordSet[j];
                        }
                    }
                } else {
                    currentRow = currentRow+addSpaces(spaces);
                }
            } else {
                if( wordsinRow > 1 ){
                    currentRow = ""
                    for( var j=0; j<wordSet.length; j++ ){
                        currentRow = currentRow+wordSet[j]+addSpaces(1);
                    }
                    currentRow = currentRow+addSpaces(maxWidth-currentRow.length)
                } else {
                    currentRow = words[words.length-1]+addSpaces(maxWidth-words[words.length-1].length)
                }
            }
            index+=wordsinRow;
            result.push(currentRow);
            currentRow = "";
            rowLength = 0;
            rowCharacters = 0;
            wordsinRow = 0;
    }
    return result;
};

function addSpaces( n ){
    return " ".repeat(n);
}

var test = ["This", "is", "an", "example", "of", "text", "justification."]

console.log(fullJustify( test, 16 ));

//--------------------------------------------------

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
