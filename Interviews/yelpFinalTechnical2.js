// Yelp Final Technical Interview. Full Stack Javascript Engineer Role.

// 10 min Intro
// 15 min Resume Project Talk
//   - Asked for detailed information on (Stack, challenges, decisions, etc..)
// 10 min on JS question
// 15 min on lazy BFS algorithm

// -------------------------------------------------------

// JS question

// What does this return?? Why?

var x = [];


var count = 0;
  for( var i = 0; i<10; i++ ){
    function(){
      return i
    }
  }
}

for(var j = 0; j<x.length; j++){
  console.log(x[j]())
}
//--------------------------------------------------------------


// Lazy BFS algorithm


    foo -------
   /   \       |
  bar   baz    quux
   |            |
   x            y


foo = {
    children: [bar, baz, quux]
}

x = {
    children: []
}


function createWalker(root) {
   // write code here
}


var walker = createWalker(foo);
walker(); // foo
walker(); // bar
...
walker(); // y
