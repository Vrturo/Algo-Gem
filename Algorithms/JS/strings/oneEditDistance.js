// Given two string s1 and s2, find if s1 can be converted to s2 with exactly one edit.
// Expected time complexity is O(m+n) where m and n are lengths of two strings.

// Examples:

// Input:  s1 = "geeks", s2 = "geek"
// Output: yes
// Number of edits is 1

// Input:  s1 = "geeks", s2 = "geeks"
// Output: no
// Number of edits is 0

// Input:  s1 = "geaks", s2 = "geeks"
// Output: yes
// Number of edits is 1

// Input:  s1 = "peaks", s2 = "geeks"
// Output: no
// Number of edits is 2


function editOneDistance( str ){
    var words = ['to', 'tea', 'ten', 'teabag', 'tinpot', 'tim', 'te', 'tender', 'teds', ' banana', 'apple'];
    //comparting input t with te

    return words.map(function( word ){
        var count = 0;

         if( word.length === str.length ){
            for( var i=0; i<word.length;i++ ){
                if( word.charAt(i) !== str.charAt(i) ) count++;
                if( count>1 ) return false;
            }
            if( count < 0 ) return word;
         }
         if( Math.abs(str.length - word.length) <2 ){
             var short = ( str.length < word.length ) ? str : word;
             var long  = ( str.length > word.length ) ? str : word;
             for( var i=0;i<short.length;i++ ){
                if( short.charAt(i) !== long.charAt(i) ){
                  count ++;
                  if( short.substring(i) === long.substring(i+1) ){
                      return word;
                  }
                }
             }
             if(count == 0) return word
         }
         return false;
    }).filter(function (val){
        return val;
    });
}

console.log(editOneDistance("to"))
