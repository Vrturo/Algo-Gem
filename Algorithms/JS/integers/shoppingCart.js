// Given a total, return all the possible items someone can order and have no change left over.

// Input:  An integer N (total being spent)
// Output: An array (number of ways to spend exact total)


var items = ["Fruit", "Fries", "Salad", "Wings", "Stick", "Plate"];
var prices =[ 2.15,    2.75,    3.35,    3.55,    4.20,    5.80  ];
var results = [];

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
