// Create an async timer that can display the date every second


function getDateAsync() {
  return new Promise( function( resolve ){
      // resolve it with the date
      var date = new Date();
      resolve(date);
  });
  // asynchronously return date
}

// function resolveDate(theDate) {
//   // do something with the date
// }

function update() {
  //getDateAsync().then(resolveDate);

  getDateAsync().then(function (returnValue) {
    // promise is resolved
    // returnValue == the date
    // update date
    var timeDiv = document.getElementById('time');
    timeDiv.innerHTML = returnValue;
  });
}

setInterval(update, 1000);

//var date = new Date();
