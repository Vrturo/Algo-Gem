// var choices =
//   {Fruit: 2.15,
//   Fries: 2.75,
//   Salad: 3.35,
//   Wings: 3.55,
//   Stick: 4.20,
//   Plate: 5.80}

// https://en.wikipedia.org/wiki/Change-making_problem
// https://www.amazon.com/Cracking-Coding-Interview-Programming-Questions/dp/0984782850/ref=dp_ob_title_bk

function appetize(money_left, cart=[]){
  if( money_left < 0 ){
    return;
  }
  if( money_left === 0 ) {
    results.push(cart);
    return;
  }
  var i =0;
  while( i< items.length ){
    cart.push(items[i])
    // if( prices[i] === money_left )
    appetize( money_left - prices[i], cart )
    cart.pop()
    i++;
  }
}

//appetize(-1)   // returns: nothing
//appetize(0)    // prints: []
//appetize(2.15) // prints: "Fruit"
//appetize(3.35) // prints: "Salad"
//appetize(4.30)
appetize(15.05)

console.log(results[0])

// return names


If you had an app that plays videos, and it saves a position if someone leaves a video, can you write 2 function which when a video is played,

One which saves the position of a video when they leave?

One to which restores the last position they were at given the name or ID of the video?

// one function saves the time
// function
// after 100 videos frop a time

// id, postion
var q = []; // [id, time]
function save(id, time){
    map[id] = time;
    for( var i=0; i<q.length; i++ ){
        if(id === q[i]){
            q.splice(i, 1)
         }
    }
    q.push(id);

}

function play(id){
    return map[id];
    for( var i=0; i<q.length; i++ ){
        if(id === q[i][1]){
            return q[i][1]
         }
    }
}
