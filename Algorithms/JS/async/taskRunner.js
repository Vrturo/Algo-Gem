// This is the text editor interface.
// Anything you type or change here will be seen by the other person in real time.

// concurrency - how many tasks we can run at a time - integer
function TaskRunner(concurrency) {
    this.capacity = concurrency;
    this.state = "empty";
    this.count = 0;
    this.storage = []; // turn to q
};


TaskRunner.prototype.push = function push( task ) {
    var that = this;

    if( this.count < this.capacity ){
        console.log( "executes immediately" );
        task(cb);
        this.count += 1
    }
    else{
        console.log( "should wait until one of the running tasks completes" );
        this.storage.push( task );
    }

    function cb(){
      // return that.count -= 1;
      that.count -= 1;
      if( that.storage[0] ){
        that.storage[0]();
        that.storage = that.storage.slice(1);
      }

    };// cb

};// push

function exampleSimpleTask(done){
  console.log("running");
  setTimeout(done, Math.random() * 1000);
};

var r = new TaskRunner(3);
// use the exampleSimpleTask from above;

r.push(exampleSimpleTask); // executes immediately
r.push(exampleSimpleTask); // executes immediately
r.push(exampleSimpleTask); // executes immediately
r.push(exampleSimpleTask); // should wait until one of the running tasks completes
r.push(exampleSimpleTask); // should wait until one of the running tasks completes

