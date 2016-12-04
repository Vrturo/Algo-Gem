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
