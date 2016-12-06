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

pass by value
pass by reference

smart enough?
intiative to take on extra work
cool person



function f() {
  console.log("foo");
  setTimeout(g, 0);
  console.log("baz");
  h();
}

function g() {
  console.log("bar");
}

function h() {
  console.log("blix");
}

f();
// foo
// bar
// baz
// blix


/* Create a button that is destroyed by clicking on it but two new buttons are created in it's place. */

// <div id="doubleHolder">
//   <button class="double">double1</button>
// </div>
//
//
// <div id="doubleHolder">
//   <button class="double">double2</button>
//   <button class="double">double3</button>
// </div>
//
//
// <div id="doubleHolder">
//   <button class="double">double2</button>
//   <button class="double">double4</button>
//   <button class="double">double5</button>
// </div>

function addEl(){
    var buttons = document.getElementsByClassName('double');
    for(var i=0; i<buttons.length; i++){
        buttons[i].addEventListener('click', function(){
            var newButton = document.createNewElement('button');
            newButton.class = 'double';
            var newButtonTwo = document.createNewElement('button');
            newButtonTwo.class = 'double';

            this.parentElement.append(
               newButton, newButtonTwo
            )
            this.remove
          }();
    }

}



// merge sort
var a1= [1, 3, 5, 7, 7, 8, 8, 9, 9];
var b1= [2, 4, 5, 6, 7, 8, 9];


function mergeSort(arr){
    var mid = ParseInt(arr.length/2),
        left = arr.slice(0, mid),
        right = arr.slice(mid, arr.length);

    return merge( mergeSort(a1), mergeSort(b1) );
}

function merge(l, r){
    var result = [];

    while( l.length && r.length ){
        if( l[0]<=r[0] ){
            result.push( l.shift() );
        } else {
            result.push( r.shift() );
        }
    }

    while(l.length) result.push( l.shift() );
    while(r.length) result.push( r.shift() );
    return result;
}

merge(a1, b1)




google web fundamentals
udacity
cs 50
