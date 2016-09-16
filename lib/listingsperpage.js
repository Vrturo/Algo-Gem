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
    solution.pop(); // remove the last page break
    return solution;
}
