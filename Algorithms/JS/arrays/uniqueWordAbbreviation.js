// An abbreviation of a word follows the form <first letter><number><last letter>.
// Below are some examples of word abbreviations:

// a) it                      --> it    (no abbreviation)

//      1
// b) d|o|g                   --> d1g

//               1    1  1
//      1---5----0----5--8
// c) i|nternationalizatio|n  --> i18n

//               1
//      1---5----0
// d) l|ocalizatio|n          --> l10n
// Assume you have a dictionary and given a word, find whether its abbreviation is unique in the dictionary. A word's abbreviation is unique if no other word from the dictionary has the same abbreviation.

// Example:
// Given dictionary = [ "deer", "door", "cake", "card" ]

// isUnique("dear") -> false
// isUnique("cart") -> true
// isUnique("cane") -> false
// isUnique("make") -> true


var ValidWordAbbr = function(dictionary) { // 232ms runtime
    this.map = {};

    for( var i = 0; i < dictionary.length; i++ ){
        var word = dictionary[i],
            abbv = abbreviate( word );

        if( word.length > 2 ){
          if( this.map[ abbv ] ){
            this.map[ abbv ].push( word );
          } else{
            this.map[ abbv ] = [ word ];
          }
        }
    }
};

ValidWordAbbr.prototype.isUnique = function(word) {
    var abbv = abbreviate( word ),
        check = this.map[abbv];

    return !check || (check.length === 1 && check[0] === word);  // if the given word itself is in the dictionary,
                                                                 // and it has the unique abbreviation,
                                                                 //then we should return true.
};

function abbreviate(str){
    if(str.length < 3) return str;
    return str.charAt(0)+(str.length-2)+str.charAt(str.length-1);
}


var dict = [ "deer", "door", "cake", "card" ]
var vwa = new ValidWordAbbr(dict);
console.log(vwa.isUnique("word"));
console.log(vwa.isUnique("anotherWord"));
console.log(vwa.map);
console.log(vwa.isUnique("deer"));
