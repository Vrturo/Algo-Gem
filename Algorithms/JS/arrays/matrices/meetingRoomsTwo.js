// Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei),
// find the minimum number of conference rooms required.

// For example,
// Given [[0, 30],[5, 10],[15, 20]],
// return 2.

// To understand why it works, first let’s define two events:
// Meeting Starts
// Meeting Ends

// Next, we acknowledge three facts:
// The numbers of the intervals give chronological orders
// When an ending event occurs, there must be a starting event has happened before that,
// where “happen before” is defined by the chronological orders given by the intervals
// Meetings that started which haven’t ended yet have to be put into different meeting rooms,
// and the number of rooms needed is the number of such meetings

// So, what this algorithm works as follows:

// for example, we have meetings that span along time as follows:

// |_____|
//       |______|
// |________|
//         |_______|
// Then, the start time array and end time array after sorting appear like follows:

// ||    ||
//      |   |   |  |

var minMeetingRooms = function(intervals) { // 135 ms runtime
    // create new arrays the size of our intervals
    var interLen = intervals.length,
        starts = new Array(interLen),
        ends = new Array(interLen);

    // populate each array
    for( var i=0; i<interLen; i++ ){
        starts[i] = intervals[i].start; // first, with start times only
        ends[i] = intervals[i].end; // second, with end times only
    }
    // sort each array to see which intervals intersect
    starts.sort(function(a, b) {
        return a - b;
    });
    ends.sort(function(a, b) {
        return a - b;
    });

    var rooms = 0, // keep track of rooms
        endsItr = 0; // ends pointer
    for( var j=0; j<starts.length; j++ ){ // check each start time
        if( starts[j] < ends[endsItr] ){ // if intervals intersect increment rooms
            rooms++;
        } else { // else check next starts and ends item
            endsItr++;
        }
    }
    // [ 0, 5, 15 ]
    // [ 10, 20, 30 ]
    return rooms;
};




Initially, endsItr points to the first end event, and we move i which is the start event pointer.
As we examine the start events, we’ll find the first two start events happen before the end event that endsItr points to,
so we need two rooms (we magically created two rooms), as shown by the variable rooms.
Then, as i points to the third start event,
we’ll find that this event happens after the end event pointed by endsItr,
then we increment endsItr so that it points to the next end event.
What happens here can be thought of as one of the two previous meetings ended,
and we moved the newly started meeting into that vacant room,
thus we don’t need to increment rooms at this time and move both of the pointers forward.
Next, because endsItr moves to the next end event,
we’ll find that the start event pointed by i happens before the end event pointed by endsItr.
Thus, now we have 4 meetings started but only one ended, so we need one more room. And it goes on as this.
