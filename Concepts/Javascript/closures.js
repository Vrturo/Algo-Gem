// - What is a closure?

// A closure is an inner function that has access to the outer (enclosing) function’s variables—scope chain.
// The closure has three scope chains:
//     it has access to its own scope (variables defined between its curly brackets),
//     it has access to the outer function’s variables,
//     and it has access to the global variables.

// The inner function has access not only to the outer function’s variables, but also to the outer function’s parameters.
// Note that the inner function cannot call the outer function’s arguments object,
// however, even though it can call the outer function’s parameters directly.

// You create a closure by adding a function inside another function.

// ----------------------------------------------------------------------

// - A Basic Example of Closures in JavaScript: 

function showName (firstName, lastName) { 
var nameIntro = "Your name is ";
    // this inner function has access to the outer function's variables, including the parameter
function makeFullName () { 
return nameIntro + firstName + " " + lastName; 
}

return makeFullName (); 
} 

showName ("Michael", "Jackson"); // Your name is Michael Jackson 

// ---------------------------------------------------------------------------------


// Note: Closures are used extensively in Node.js; they are workhorses in Node.js’ asynchronous, non-blocking architecture.
//       Closures are also frequently used in jQuery and just about every piece of JavaScript code you read.


//  - Classic jQuery Example of Closures: 

$(function() {
  ​var selections = [];
  $(".niners").click(function() { // this closure has access to the selections variable​
    selections.push (this.prop("name")); // update the selections variable in the outer function's scope​
  });
});

// -------------------------------------------------------------------------------------

// - Closures’ Rules and Side Effects

// Closures have access to the outer function’s variable even after the outer function returns:

//     The inner function still has access to the outer function’s variables even after the outer function has returned.
//     When functions in JavaScript execute, they use the same scope chain that was in effect when they were created.
//     This means that even after the outer function has returned,
//     the inner function still has access to the outer function’s variables.
//     Therefore, you can call the inner function later in your program.

// This example demonstrates:


function celebrityName (firstName) {
    var nameIntro = "This celebrity is ";
    // this inner function has access to the outer function's variables, including the parameter​
   function lastName (theLastName) {
        return nameIntro + firstName + " " + theLastName;
    }
    return lastName;
}
​
​var mjName = celebrityName ("Michael"); // At this juncture, the celebrityName outer function has returned.​
​
​// The closure (lastName) is called here after the outer function has returned above​
​// Yet, the closure still has access to the outer function's variables and parameter​
mjName ("Jackson"); // This celebrity is Michael Jackson 

// -------------------------------------------------------------------------------------

// - Closures store references to the outer function’s variables;

//     they do not store the actual value. 
//     Closures get more interesting when the value of the outer function’s variable changes before the closure is called.

function celebrityID () {
    var celebrityID = 999;
    // We are returning an object with some inner functions​
    // All the inner functions have access to the outer function's variables​
    return {
        getID: function ()  {
            // This inner function will return the UPDATED celebrityID variable​
            // It will return the current value of celebrityID, even after the changeTheID function changes it​
          return celebrityID;
        },
        setID: function (theNewID)  {
            // This inner function will change the outer function's variable anytime​
            celebrityID = theNewID;
        }
    }
​
}
​
​var mjID = celebrityID (); // At this juncture, the celebrityID outer function has returned.​
mjID.getID(); // 999​
mjID.setID(567); // Changes the outer function's variable​
mjID.getID(); // 567: It returns the updated celebrityId variable 

// -------------------------------------------------------------------------------------

// - Closures' Common bugs

//      Closures have access to the updated values of the outer function’s variables,
//    they can also lead to bugs when the outer function’s variable changes with a for loop.

//    Example below:

​function celebrityIDCreator (theCelebrities) {
    var uniqueID = 100,
        i;
    for (i = 0; i < theCelebrities.length; i++) {
      theCelebrities[i]["id"] = function ()  {
        return uniqueID + i;
      }
    }

    return theCelebrities;
}
​
​var actionCelebs = [{
                        name:"Stallone", id:0
                      }, {
                        name:"Cruise", id:0
                      }, {
                        name:"Willis", id:0
                    }];
​var createIdForActionCelebs = celebrityIDCreator (actionCelebs);
​var stalloneID = createIdForActionCelebs [0];  
console.log( stalloneID.id() ); // 103








