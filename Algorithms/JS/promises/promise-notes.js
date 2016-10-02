The Promise object is used for asynchronous computations.
A Promise represents a value which may be available now, or in the future, or never.

Promises help handle asynchronous work with ease
There are many methods to handle asynchronous already but Promises are recommended option beacause they give you
flexability, intuative syntax, and error handling

The promise object is used for deferred and asynchronous computations

What is asynchronous work?

Normally code is synchronous. One line of code is executed, and the next line is executed immediately afterwards.

asynchronous code is not guaranteed to execute in a timeline.
You should assume that you have no idea when asynchronous function will complete.
Jsut because one request is fired first, it will arrive before the next request.
Or that one might fail and mght not even return

4 states of Promises

Fullfilled - resolved (it worked)

Rejected - it didnt work

Pending - Still waiting

// Promise Constructor
new Promise( function(resolve, reject){
  resolve('hi'); // works
  resolve('bye') // cant happend a second time
})


Promise is a try catch wrapper around that finish at an un predictable time.
Promise is a constructor. Store a promise as a variable or work once created.
