
// var search = function(nums, target) {

//     function getPivot(arr){
//         var low = 0,
//             high = arr.length-1,
//             mid
//             result = -1;

//         while( low<= high ){
//             if( arr[low] <= arr[high] ) return low; // means it is sorted
//             mid = Math.floor( (high+low)/2 );
//             var next = (mid+1) % target,
//                 prev = (mid+target-1) % target;
//             if( arr[mid] <= arr[next] && arr[mid] <= arr[prev] ) {
//                 result = mid;
//                 break;
//             } else if( arr[mid] <= arr[high] ){
//                 high = mid-1;
//             } else if( arr[mid] >= arr[low] ){
//                 low = mid+1;
//             }
//         }
//     }
//     // var lo = 0,
//     //     hi = nums.length-1;
//     // while(lo<hi){
//     //     var mid = Math.floor( (lo+hi)/2 );
//     //     if(nums[mid]>nums[hi]) lo = mid+1;
//     //     else hi=mid;
//     // }
//     // console.log(lo, getPivot(nums))
//     var rot = getPivot(nums),
//         lo = 0,
//         hi = nums.length-1;
//         // The usual binary search and accounting for rotation.
//       while(lo<=hi){
//           var mid= Math.floor( (lo+hi)/2 );
//           var realmid = (mid+rot) % nums.length;
//           if(nums[realmid] === target) return realmid;
//           if(nums[realmid]<target){
//               lo = mid+1;
//           } else {
//               hi = mid-1;
//           }
//       }
//       return -1;

// }
// var test = [22,33,44,11]
// console.log( search(test, 22))
 // ---------------------------------------------


// var search = function(nums, target) {

//     var low = 0,
//         high = nums.length-1,
//         mid;

//     while( low<= high ){
//         if( nums[low] <= nums[high] ) return low; // means it is sorted
//         mid = Math.floor( (high+low)/2 );
//         var next = (mid+1) % target,
//             prev = (mid+target-1) % target;
//         if( nums[mid] <= nums[next] && nums[mid] <= nums[prev] ) {
//           return mid
//         } else if( nums[mid] <= nums[high] ){
//           high = mid-1;
//         } else if( nums[mid] >= nums[low] ){
//           low = mid+1;
//         }
//     }
//     return -1;
// }
// var test = [2,3,4,1]
// console.log( search(test, 1) )

// function binarySearch(k, nums){
//     var lo=0,
//         hi=nums.length-1,
//         mid;
//     while(lo<=hi){
//         mid = Math.floor( (lo+hi)/2 );
//         if( k === nums[mid] || k === nums[lo] || k === nums[hi] ) return true;
//         nums[mid] > nums[hi] ? lo=mid+1 : hi=mid;
//     }
//     return false;
// }

// console.log(binarySearch(8, [1, 2, 3, 5, 7, 8]));



    // var map = {};
    // function walk(moovi){
    //     if(map[moovi.getId()]){
    //         return;
    //     } else {
    //         map[moovi.getId()] = moovi.getRating();
    //     }
    // };
    // for( var i=0; i<movie.similar.length; i++){
    //     walk(similar[i])
    // }

    //     var ratings = [],
    //     visited = {};
    // function walk(m){
    //     var rating_Id = Math.floor( m.getId()*10 );
    //     if(!visited[m.getId()]){
    //         if(ratings[rating_Id]){
    //             ratings[rating_Id].push(m.getId());
    //         } else {
    //             ratings[rating_Id] = [m.getId()];
    //         }
    //         visited[m.getId()] = true;
    //         var similar = m.getSimilarMovies();
    //         for( var i=0; i<similar.length; i++){
    //             walk(similar[i])
    //         }
    //     }
    // }
    // walk(movie);

    // return ratings;

// ------------------------------------------------------------------------


// function getMovieRecommendations(movie, n)
// {
//     if(movie.getSimilarMovies().length < 1) return [];
//     var ratings = [],
//         visited = {};
//     function walk(m){
//         var rating_Id = m.getId(),
//             cRating = Math.floor( m.getRating()*10 );
//         if(!visited[m.getId()]){
//             if(ratings[cRating]){
//                 ratings[cRating].push(m);
//             } else {
//                 ratings[cRating] = [m];
//             }
//             visited[m.getId()] = true;
//             var similar = m.getSimilarMovies();
//             for( var i=0; i<similar.length; i++){
//                 if(!visited[similar[i].getId()]) walk(similar[i]);
//             }
//         }
//     }
//     walk(movie);
//     ratings = ratings.filter(function(n){ return n !== undefined });
//     var counter = 0,
//         result = [];
//     for(var i = ratings.length-1; i>=0;i--){
//         for( var j =0; j<ratings[i].length; j++ ){
//             if( counter < n ){
//                 if( movie.getId() !== ratings[i][j].getId() ){
//                     result.push( ratings[i][j] );
//                     counter++;
//                 }
//             } else {
//                 return result;
//             }
//         }
//     }
//     return result;
// }

function intersect(A, B){
      var map = {};
      for(var i =0; i<A.length; i++){
          if(map[A[i]]){
              map[A[i]]++;
          } else {
              map[A[i]] = 1;
          }
      }
      var result = [];
      for( var j =0; j<B.length; j++){
          if(map[B[j]]){
            console.log('hit')
              result.push(B[j])
              map[B[j]] < 1 ? delete map[B[j]] : map[B[j]]--;
          }
      }
      return result;
  }
console.log( intersect([1], [1]) )
