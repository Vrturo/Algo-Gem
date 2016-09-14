// Target Practice - RECURSION

// 1. What are the three recursive architectual patterns covered in class?



// 1.a List the step by step for Helper Method Recursion?



// 1.b Should the recursive case or base case typically be tackled first?

// Base Case


// 2a. Print each item in an array in order using Helper Method of Recursion
// Input: Array
// Output: Undefined
function print(arr){
  var index = 0;
  function recurseLoop(i){
    if(i < arr.length){
      console.log(arr[i]);
      i++;
      recurseLoop(i)
    }
  }
  return recurseLoop(index);
}
// Example: print([1,2,3]) =>
// 1
// 2
// 3

// console.log(print([1,2,3]))


// 2b. Print each item in an array backwards using Helper Method of Recursion
// Input: Array
// Output: Undefined
function reversePrint(arr){
  var index = arr.length;; // track state
  function reverseRecurse(i){// instantiate
    if(i >= 0){ // base case
      console.log(arr[i]);
      i--;
      reverseRecurse(i) //invoke
    }
  }
  return reverseRecurse(index); // return
}
// Example: reversePrint([1,2,3]) =>
// 3
// 2
// 1
// console.log(reversePrint([1,2,3]))



// 2c. Reverse a string using Helper Method of Recursion
// Input: String with no spaces
// Output: String
function reverseString(str){
  var results = "", // results
      index = str.length; // variables
  function reverseString(i){ //Instantiate
    if(i >= 0){ // base case
      results += str[i];
      i--;
      reverseString(i);
    }
  }
  reverseString(index) // invoke
  return results // return
}
// Example: reverseString('hello') => 'olleh'
// console.log(reverseString('hello'))



// 2d. Create tuples from an array using the Helper Method of Recursion
// Input: Array of integers
// Output: Array of tuples
function tuples(arr){
  var results = []; // variables
  function recurseTuple(arr){
    if(arr.length > 0){
      results.push(arr.splice(0, 2));
      recurseTuple(arr);
    }
  }
  recurseTuple(arr);
  return results; // return
}
// Example: tuples([1, 2, 3, 4, 5, 6]) => [[1,2], [3,4], [5,6]]
// Example: tuples([1, 2, 3, 4, 5]) => [[1,2], [3,4], [5, undefined]]

// console.log(tuples([1, 2, 3, 4, 5]))


// 2e. Flatten a nested array using the Helper Method of Recursion
// Input: Array of integers and arrays
// Output: Array of integers
function flatten(arr){
  var index = 0;
  function recurseFlatten(results, i){ // instantiate
    if(i < arr.length){
      if(arr[i].typeOf === "number"){
        results.push(arr[i]);
        i++;
        recurseFlatten(results, i)
      }
      else{
        recurseFlatten(results, i)
      }
    }
  }
  return recurseFlatten([], index) // return

}
// Example: flatten([1, [2, 3, [4]], 5, [[6]]]) => [1, 2, 3, 4, 5]
// console.log(flatten([1, [2, 3, [4]], 5, [[6]]]))



// 2f. Power using Helper Method of Recursion
// Input: Two Integers, Base and Exponent
// Output: Integer of result
function power(base, exponent){
  var temp = base,
      counter = 1; // variables
  function recursePower(counter){ // instantiate
    if(counter < exponent){
      temp = base * temp;
      counter++;
      console.log(temp)
      recursePower(counter);
    }
  }

  recursePower(counter);
  return temp;
}
// Example: power(3, 4) => 81
// console.log(power(3, 4))



// 2g. Merge two sorted array using the Helper Method of Recursion
// Input: 2 Sorted Arrays
// Output: Sorted Array
function merge(array1, array2){


}
// Example: merge([1, 4, 7],[2, 3, 6, 9]) => [1, 2, 3, 4, 6, 7, 9]



// 3. What are side effects?



// 3a.-3g. Redo problems 2a.-2g. with Recursion using Side Effects



// 4. How is Pure Recursion different from Recursion w/ Side Effects?



// 4a.-4g. Redo problems 2a.-2g. with Using Pure Recursion
