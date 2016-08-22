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
 *     Extra Credit     *
 ************************/

/**
 * Extra Credit 1:
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
 * Extra Credit 2:
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
