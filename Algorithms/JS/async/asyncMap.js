
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
 const tasks = [
    function cbOne(resolve, reject){
      setTimeout(function(){
          console.log('one');
        }, resolve(), 300);
    },
    function cbTwo(resolve, reject){
      setTimeout(function(){
          console.log('Two');
        }, resolve(), 200);
    },
    function cbThree(resolve, reject){
      setTimeout(function(){
          console.log('Three');
        }, resolve(), 100);
    }
]

// NOT DONE

function syncronizerInstance(arrayOfFunctions, startIndex) {
  var index = startIndex || 0;

  function iterator() {
    return new Promise(function(resolve, reject) {
      arrayOfFunctions[index](resolve, reject);
    })
    .then(function(stuff) {
      index += 1;
      if (arrayOfFunctions[index]) iterator();
    });
  }

  return iterator;
};

syncronizerInstance(tasks, 0)

