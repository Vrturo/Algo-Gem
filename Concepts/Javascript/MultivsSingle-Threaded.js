Multi-Threaded Application vs. Single Threaded Application

// What is a Multi-Threaded application?
//     Multithreading is a feature of an operating system that allows programs to run subcomponents or threads in parallel.
//     Typically most applications only need to use one thread because they do not perform time consuming tasks.
//     The use of multiple threads allows an application to distribute long running tasks so that they can be executed in parallel.
//     This gives the user the perceived appearance that the application is working faster due to the fact that
//     while one thread is waiting on an IO process the remaining tasks can make use of the available CPU.
//     The allows working threads to execute in tandem so that they can be competed sooner.


// Why would we use a multi threaded application vs. a single threaded application?

//   - Multithreading Benefits

//       Improved responsiveness — Users usually report improved responsiveness compared to single thread applications.
//       Faster applications — Multiple threads can lead to improved application performance.
//       Prioritization — Threads can be assigned a priority which would allow higher priority tasks to take
//                         precedence over lower priority tasks.

//   - Single Threading Benefits

//       Programming and debugging — These activities are easier compared to multithreaded applications due to
//                                   the reduced complexity
//       Less Overhead — Threads add overhead to an application


// When developing multi-threaded applications, the following must be considered..

//       Deadlocks occur when two threads hold a monitor that the other one requires.
//       In essence each task is blocking the other and both tasks are waiting for the other monitor to be released.
//       This forces an application to hang or deadlock.
//       Resource allocation is used to prevent deadlocks because the system determines if
//       approving the resource request will render the system in an unsafe state.
//       An unsafe state could result in a deadlock. The system only approves requests that will lead to safe states.
//       Thread Synchronization is used when multiple threads use the same instance of an object.
//       The threads accessing the object can then be locked and then synchronized so that each task can
//       interact with the static object on at a time.


// -------------------------------------------------------------------------------------------

 // - Resources
 //   This blog provided info and examples:
 //    http://benalman.com/news/2010/11/immediately-invoked-function-expression/
