// Given two paramaters, an integer(n), a list of Arrays with Objects that conatin a Host_id, Listing_id, Score, City
// Build a function that helps display n amount of objects per page.

// The list of objects are given in order of Score, from High to Low.
// The objects must be displayed in order of highest score first.
// We dont want one host dominating the pages.
// Each page must display any unique hosts that havent displayed yet.
// After each page insert an empty space as a line break escept for the last page


function sortListing( n, listings ){
  var head = 0,
      linkedList = [];
  //created linkedList of indices
  for( var i = 1; i < listings.length; i++ ){
    linkedList.push( i );
  }
  linkedList.push( null );

  var results = [],
      cache = {},
      pageCount = 0;

  var prev = null,
      current = head,
      listing;

  while( head !== null ){ //  Breaks when every value is inserted into results array
    if( pageCount === n ){
      // if page hits limit, add line break and reset
      results.push( 'page break' );
      cache = {};
      prev = null;
      current = head; // restart at the current head index.
      pageCount = 0;
    }
    if( current === null ){ // Hit the end of results so push in next value with repeated host
      results.push( listings[head] );
      pageCount++;
      head = linkedList[head];
    } else if( !cache[/[^,]*/.exec(listings[current])[0]] ){ // regex grabs up to 1st comma
        cache[/[^,]*/.exec(listings[current])[0]] = true; // cache listing
        results.push( listings[current] ); // push current listing into results
        pageCount++;
        // With each insert, the linked list gets updated by modifying what the prev points to.
        if( current === head ){
          head = linkedList[head];
        }
        linkedList[prev] = linkedList[current]; // keep moving down list
        current = linkedList[current];
    } else {
      prev = current; // keep moving down list
      current = linkedList[current];
    }
  }
  return results;
}

var test = [    "11, 2, 99, San Francisco",
                "6, 3, 92, Los Angeles",
                "2, 24, 96, San Francisco",
                "11, 56, 90, San Francisco",
                "6, 65, 80, Los Angeles",
                "1, 29, 76, San Francisco",
                "12, 19, 60, San Francisco",
                "6, 10, 52, Los Angeles",
                "11, 11, 46, San Francisco",
                "6, 65, 40, Los Angeles",
                "1, 29, 36, San Francisco",
                "3, 19, 32, San Francisco",
                "2, 10, 28, Los Angeles",
                "2, 11, 26, San Francisco",
                "5, 19, 20, San Francisco"
            ];

var testTwo = [ "11, 2, 99, San Francisco",
                "6, 3, 92, Los Angeles",
                "6, 24, 96, San Francisco",
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
var testThree = [ "1, 2, 99, San Francisco",
                "1, 3, 92, Los Angeles",
                "1, 24, 96, San Francisco",
                "3, 56, 90, San Francisco",
                "6, 65, 80, Los Angeles",
                "2, 29, 76, San Francisco",
                "2, 19, 60, San Francisco",
                "6, 10, 52, Los Angeles",
                "11, 11, 46, San Francisco",
                "5, 65, 40, Los Angeles",
                "2, 29, 36, San Francisco",
                "3, 19, 32, San Francisco",
                "2, 10, 28, Los Angeles",
                "2, 11, 26, San Francisco",
                "5, 19, 20, San Francisco"
            ];
// sortListing( 4, test );
// sortListing( 5, testTwo );
// sortListing( 2, testThree );

function benchMark( n, results){
  var start = new Date();
  paginate(n, results);
  var end = new Date();
  return Number(end - start) // number of miliseconds
}

console.time('bm');
console.log( benchMark( 4, test ) );
console.timeEnd('bm');

// -----------------------------------------------------------


function paginate(num, results) {
    var solution = [],
        dup = [],
        cache = {},
        currentListing;

    for( var i=0, j=0, pageCount=0; i < results.length || dup.length > 0;){

        while(j < dup.length){
           //check if current listing in dup is unique user
            //if unique, then add to solution
            //remove the item from duplcates
        //if current listing in dup is already in cache
            //  increment j++
        //if end of dup is reached then start moving through results
            if( cache[dup[j][0]] ){
                j++;
            } else{
                solution.push( dup.splice(j,1)[1] );
            }
        }
        if(i >= results.length){
            solution.push( dup.splice(j,1)[1] ); // once results length hits, push all duplicates into solution
        } else {
            currentListing = results[i].split(','); //
            if( cache[currentListing[0]] !== undefined ){ // incase id is 0, can be falsy
                dup.push( [currentListing[0], results[i]] );
                i++
            }else{
                cache[currentListing[0]] = true;
                solution.push( results[i] );
                pageCount++;
                i++;
            }
        }
        if(pageCount === num){
            //add blank line into solution
            //reset pageCount to 0;
            solution.push( "" );
            pageCount = 0;
            cache = {};
            //restart back to beginning of dup j = 0
            j = 0;
        }
    }

    return solution;
}


