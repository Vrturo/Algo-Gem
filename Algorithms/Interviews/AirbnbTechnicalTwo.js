// Given two paramaters, an integer(n), a list of Arrays with Objects that conatin a Host_id, Listing_id, Score, City
// Build a function that helps display n amount of objects per page.

// The list of objects are given in order of Score, from High to Low.
// The objects must be displayed in order of highest score first.
// We dont want one host dominating the pages.
// Each page must display any unique hosts that havent displayed yet.
// After each page insert an empty space as a line break escept for the last page

function paginate(num, results) {

}


var test = [ "11, 2, 99, San Francisco",
                "6, 3, 96, Los Angeles",
                "6, 24, 92, San Francisco",
                "3, 56, 90, San Francisco",
                "6, 65, 80, Los Angeles",
                "1, 29, 76, San Francisco",
                "1, 19, 60, San Francisco",
                "6, 10, 52, Los Angeles",
                "11, 11, 46, San Francisco",
                "5, 65, 40, Los Angeles",
                "4, 29, 36, San Francisco",
                "3, 19, 32, San Francisco",
                "2, 10, 28, Los Angeles",
                "2, 11, 26, San Francisco",
                "5, 19, 20, San Francisco"
            ];
console.log( paginate( 3, test ) );

