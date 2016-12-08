
// IIFE in short ( Immediately invoked function expression ).


// It does three things in 1 statement.
//   Creates a function instance.
//   Executes the function.
//   Discard the function. The function created was an anonymous function and after the statement there is no reference to it.


// - Example Use Cases

//     Module pattern can be implemented with the help of IIFE.
//     One of the most common ways in which immediate functions are used:
//         as simple, self-contained wrappers for functionality.
//         The variables needed for the unit of functionality are trapped in the closure,
//         but they aren’t visible anywhere else.
//     Enforcing the use of a name within an enclosed scope.
//     Keeping code readable with shorter names.


// ----------------------------------------------------

// In JavaScript, every function, when invoked, creates a new execution context.
// Because variables and functions defined within a function may only be accessed inside,
// but not outside, that context, invoking a function provides a very easy way to create privacy.


    function makeCounter() {
    // `i` is only accessible inside `makeCounter`.
      var i = 0;

      return function(){
        console.log( ++i );
      };
    }
    // Note that `counter` and `counter2` each have their own scoped `i`.

    var counter = makeCounter();
    counter(); // logs: 1
    counter(); // logs: 2
    var counter2 = makeCounter();
    counter2(); // logs: 1
    counter2(); // logs: 2

// In many cases, you won’t need multiple “instances” of whatever your makeWhatever function returns,
// and can make do with just a single instance, and in other cases, you’re not even explicitly returning a value.

// ----------------------------------------------------------------------------------------

 // - Resources
 //   This blog provided info and examples:
 //    http://benalman.com/news/2010/11/immediately-invoked-function-expression/


