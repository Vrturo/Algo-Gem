Uber 1st Technical Interview. Front End Engineer Role

10 min Intro
50 min on algorithm


// This is the text editor interface.
// Anything you type or change here will be seen by the other person in real time.

// concurrency - how many tasks we can run at a time - integer
function TaskRunner(concurrency) { // Enter Code Here }

TaskRunner.prototype.push = function push(task) { // Enter Code Here }

function exampleSimpleTask(done) { // do not touch
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

// Instructions: // Task Runner should run tasks when pushed.
// If Taskrunner has space then envoke the function immediately
// if there is no space and tasks are still running, wait to run task till there's space
