
/* Implement the function asyncMap:
 *
 * asyncMap has two parameters, an array of asynchronous functions (tasks) and a callback.
 * Each of the tasks takes a separate callback and invokes that callback when complete.
 *
 * The callback passed to asyncMap is then performed on the results of the callbacks of the tasks.
 *
 * The order of these results should be the same as the order of the tasks.
 * It is important to note that this is not the order in which the tasks return,
 * but the order in which they are passed to asyncMap.
 *
 * Once all the callbacks of the tasks are returned, asyncMap should invoke the callback
 * on the results array.
 *
 *
 * Example:
 *
 * asyncMap([
 *  function(cb){
 *    setTimeout(function(){
 *      cb('one');
 *    }, 200);
 *  },
 *  function(cb){
 *    setTimeout(function(){
 *      cb('two');
 *    }, 100);
 *  }
 * ],
 *  function(results){
 *    // the results array will equal ['one','two'] even though
 *    // the second function had a shorter timeout.
 *    console.log(results); // ['one', 'two']
 * });
 *
 *
 */
 var tasks = [
    function cbOne(){
      setTimeout(function(){
         return 'one';
        }, 300);
    },
    function cbTwo(){
      setTimeout(function(){
         return 'Two';
        }, 200);
    },
    function cbThree(){
      setTimeout(function(){
         return 'Three';
        }, 100);
    }
  ]
  var print = function( fn ){
     fn(); // ['one', 'two']
  };

// var asyncMap = function( tasks, callback ){
//   var results = [];

//   for( var i = 0; i < tasks.length; i++ ){
//     results.push( callback( tasks[i] ) )();
//   }

// };
var asyncMap = function(arr, cb){

  var results = [];
  // if ( array.length === 0 ){
  //   cb();
  // }
  // else{
  //   array[0]();
  // }
 for( var i = 0; i < arr.length; i++ ){
    print(arr[i]);
 }
};

console.log( asyncMap(tasks, print) );
