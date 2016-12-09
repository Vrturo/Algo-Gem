// Ebay Technical Interview. Senior Front End Engineer Role - Selling experience team

// 10 min Intro
// 15 min random questions
//     What happens when you type something into a url
//     What does CSS stand for? How would you explain it towards a website
//     == vs !== in Javascript?
// 5 min on JS question
// 10 min on html challenge
// 10 min on merge algorithm
// 10 Q&A


// -------------------------------------------------------

// JS question

// What does this return?? Why?

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

//--------------------------------------------------------------

// - HTML challenge

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


// ------------------------------------------------------------------


// Write an algorithm that will sort two arrays together

// merge sort
var a1= [1, 3, 5, 7, 7, 8, 8, 9, 9];
var b1= [2, 4, 5, 6, 7, 8, 9];




