// This is the text editor interface.
// Anything you type or change here will be seen by the other person in real time.

// concurrency - how many tasks we can run at a time - integer
function TaskRunner(concurrency) {
    this.capacity = concurrency;
    this.storage = 0;
    this.state = "empty";



}

TaskRunner.prototype.push = function push(task) {
    var that = this;

    if( this.storage === this.capacity ){
        this.state = "filled";
    }

    function anon(){
        var waiting = [];

        if( that.state !== "filled" ){
            that.storage += 1;
            console.log( "executes immediately" );
            if( waiting[0] ){
               waiting[0]();
            };
        }
        else{
            waiting.push( this );
            console.log( "should wait until one of the running tasks completes" );
        }
    };// anon

    task(anon);

}// push

function exampleSimpleTask(done) {
  console.log("running");
  setTimeout(done, Math.random() * 1000);
}

var r = new TaskRunner(3);
// use the exampleSimpleTask from above;

r.push(exampleSimpleTask); // executes immediately
r.push(exampleSimpleTask); // executes immediately
r.push(exampleSimpleTask); // executes immediately
r.push(exampleSimpleTask); // should wait until one of the running tasks completes
r.push(exampleSimpleTask); // should wait until one of the running tasks completes
