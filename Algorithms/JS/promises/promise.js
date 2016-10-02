new Promise(function(resolve) {
  console.log('first');
  resolve();
  console.log('second');
}).then(function() {
  console.log('third');
}); // -- > first
    //      second
    //      third

// 'first', 'second' and 'third' all get logged.
// Most notably, 'second' gets logged despite the fact that it comes after resolve().
