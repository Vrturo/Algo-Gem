function makeCounter() {
// `i` is only accessible inside `makeCounter`.
  var i = 0;

  return function() {
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

