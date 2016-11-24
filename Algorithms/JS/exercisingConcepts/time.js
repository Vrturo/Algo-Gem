/*********************************************************************
 *                     Pair Programming I                            *
 *                                                                   *
 *  Instructions: List the Time and Space complexity of each         *
 *                of the following functions in the space provided   *
 *                                                                   *
 *********************************************************************/

/**
 * Problem 1:
 *  Time Complexity: 0(1)
 *  Auxiliary Space Complexity: 0(1)
 **/

function isThereCat(object) {

  while(object['cat']) {
    console.log("There is cat!");
    delete object['cat'];
  }
  console.log("There is no cat!");
};


/**
 * Problem 2:
 *  Time Complexity: // 0(1)
 *  Auxiliary Space Complexity: // 0(1)
 **/

function powerOfThrees(int) {
  var result = []; // 0(1)
  var count = 1; // 0(1)
  var temp = 1; // 0(1)

  while(count <= 3) { //0(1)
    temp *= int;
    result.push(temp);
    count++;
  }

  return result;
};


/**
 * Problem 3:
 *  Time Complexity: // 0(1)
 *  Auxiliary Space Complexity: // 0(1)
 **/

function findDuplicate(collection) {
  var len = collection.length; // 0(1)
  var currItem; // 0(1)

  for (var i = 0; i < len; i++) {
    currItem = collection[i];

    for (var j = 0; j < len; j++) {
      if (j !== i) {
        if (currItem === collection[j]) {
          return true;
        }
      }
    }
  }
  return false;
};


/**
 * Problem 4:
 *  Time Complexity: // 0(n*m)
 *  Auxiliary Space Complexity: // 0(n*m)
 **/

function intersectionPoints(array1, array2) {
  var result = []; // 0(1)
  var points; // 0(1)

  for (var i = 0; i < array1.length; i++) { // 0(n)
    for (var j = 0; j < array2.length; j++) { // 0(m)
      if (array1[i] === array2[j]) {
        points = [i,j];
        result.push(points); // 0(n*m)
        points = [];
      }
    }
  }

  return result;
};


/**
 * Problem 5:
 *  Time Complexity: 0(n)
 *  Auxiliary Space Complexity: // 0(n)
 **/

function nthFibonacci(n) {
  var result = [0,1]; // 0(1)

  for(var i = 1; i < n; i++) {
    result[i+1] = result[i] + result[i-1];
  }

  return result[n];
};


/************************
 *
 * Problem: Refactor findDuplicate to find all repeating elements in O(n) time complexity
 *          What is the auxiliary space complexity of your solution?
 *
 *          Auxiliary Space Complexity:
 **/

 function findDuplicate(collection) {
   lib ={};
   for elem in array
     if lib[elem]
       lib[elem]++
     else
       lib[elem] =1
     end
     result=[]
     for key in lib
       if lib[key] > 1
         result.push(key)
       end
     end
 end


/**
 *  Time Complexity:
 *  Auxiliary Space Complexity:
 **/

function nthFibonacci(n){
  var result; // 0(1)

  function searchFib(index){
    if(index < 2){
      return index;
    } else {
      return searchFib(index-2) + searchFib(index-1);
    }
  }

  result = searchFib(n);
  return result;
};

// /----------------------------------------------

// time complexity of the following code: O(log N)
 var a = 0, i = N;
        while (i > 0) {
            a += i;
            i /= 2;
        }

// ---------------------------------------------

// What is the worst case time complexity of the following code :

/*
 * V is sorted
 * V.size() = N
 * The function is initially called as searchNumOccurrence(V, k, 0, N-1)
 */


function searchNumOccurrence(vector<int> &V, k, start, end) {
    if (start > end) return 0;
    var mid = (start + end) / 2;
    if (V[mid] < k) return searchNumOccurrence(V, k, mid + 1, end);
    if (V[mid] > k) return searchNumOccurrence(V, k, start, mid - 1);
    return searchNumOccurrence(V, k, start, mid - 1) + 1 + searchNumOccurrence(V, k, mid + 1, end);
}

// Time Complexity: 0(n); // all elements can be the same

// -----------------------------------------------------

// What is the time complexity of the following code :

        var j = 0;
        for(var i = 0; i < n; ++i) {
            while(j < n && arr[i] < arr[j]) {
                j++;
            }
        }

// Time Complexity: 0(n) - In the first look, the time complexity seems to be O(n^2) due to two loops.
//                         However, note that the variable j is not initialized for each value of variable i.

// --------------------------------------------------------------------------------------------
