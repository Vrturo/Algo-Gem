// points in the form [[0, 1], [1, 1], [5, 3]....
// reference in the form [2, 3]
// k is an integer
function closestPoints(points, reference, k){

  //collect the closest points to return
  var results = [];

  //track all the distances of each point to the reference along with its index
  //this can be done O(N) time based on the number of points
  var distances = [];
  for(var i = 0; i < points.length; i++) {
    distances[i] = [getDistance(points[i], reference), i];
  }

  //sort the first k values using quickSelect in an average case of O(N) time
  quickSelect(distances, 0, distances.length - 1, k);

  //collect the first k points
  for(var j = 0; j < k; j++){
    results.push(points[distances[j][1]])
  }

  return results;

  //helper functions
  //get the distance between two points
  function getDistance(point1, point2) {
    return Math.sqrt(Math.pow(point2[0] - point1[0],2) + Math.pow(point2[1] - point1[1],2));
  }

  //perform quickSelect on the distances array to find the k smallest distances
  function quickSelect(collection, start, end, k) {
    //pick a pivot as the last value so loop up to but not including the end
    var mid = start;
    //separate the lower and higher halfs
    for(var i = start; i < end; i++){
      if(collection[i][0] < collection[end][0]){
        swap(collection, i, mid);
        mid++;
      }
    }
    //place the pivot at the collect location
    swap(collection, mid, end);

    //this means the first k elements are found
    if(mid === k - 1){ return; }
    return mid < k - 1 ? quickSelect(collection, mid + 1, end, k) : quickSelect(collection, start, mid - 1, k);

  }

  //swap two items in an array
  function swap(collection, i, j) {
    var temp = collection[i];
    collection[i] = collection[j];
    collection[j] = temp;
  }
}

console.log(closestPoints([[1,1], [2,2], [3,3], [4,4]], [4,5], 1));
