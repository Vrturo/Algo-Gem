// There are N children standing in a line. Each child is assigned a rating value.

// You are giving candies to these children subjected to the following requirements:

// Each child must have at least one candy.
// Children with a higher rating get more candies than their neighbors.
// What is the minimum candies you must give?

var candy = function(ratings) {
  var prev = 1;
  var latestLocalMaxIndex = 0;
  var latestLocalMaxValue = 1;
  var results = 1;
  for (var i = 1; i < ratings.length; i++){
    // Case 1 : rating is the same as previous value
    // Case 2 : rating is higher than previous value
    // Case 3: rating is lower than previous value
    if (ratings[i] < ratings[i-1]){
      if (i - latestLocalMaxIndex >= latestLocalMaxValue){
        results += i - latestLocalMaxIndex + 1;
      }else {
        results += i - latestLocalMaxIndex;
      }
      prev = 1;
    }else if (ratings[i] > ratings[i-1]){
      prev++;
      results += prev;
      latestLocalMaxValue = prev;
      latestLocalMaxIndex = i;
    }else {
      latestLocalMaxIndex = i;
      latestLocalMaxValue = 1;
      prev = 1;
      results += prev;
    }
  }
  return results;
};
