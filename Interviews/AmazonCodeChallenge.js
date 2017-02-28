Amazon Final Technical Interview. Software Development Engineer II, Traffic Management role

Timed Challenge. 1 hr/ 3 questions

Question 1.

Given a dataset of objects that are labeled as movies and have built in functions, return movie recommendations
based on highest rating

// CODE

function getMovieRecommendations(movie, n) {
    if(movie.getSimilarMovies().length < 1) return [];
    var ratings = [],
        visited = {};
    function walk(m){
        var rating_Id = m.getId(),
            cRating = Math.floor( m.getRating()*10 );
        if(!visited[m.getId()]){
            if(ratings[cRating]){
                ratings[cRating].push(m);
            } else {
                ratings[cRating] = [m];
            }
            visited[m.getId()] = true;
            var similar = m.getSimilarMovies();
            for( var i=0; i<similar.length; i++){
                if(!visited[similar[i].getId()]) walk(similar[i]);
            }
        }
    }
    walk(movie);
    ratings = ratings.filter(function(n){ return n !== undefined });
    var counter = 0,
        result = [];
    for(var i = ratings.length-1; i>=0;i--){
        for( var j =0; j<ratings[i].length; j++ ){
            if( counter < n ){
                if( movie.getId() !== ratings[i][j].getId() ){
                    result.push( ratings[i][j] );
                    counter++;
                }
            } else {
                return result;
            }
        }
    }
    return result;
}


