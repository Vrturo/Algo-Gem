// Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei),
// find the minimum number of conference rooms required.

// For example,
// Given [[0, 30],[5, 10],[15, 20]],
// return 2.

// Meeting Starts  // [ 0, 5, 15 ]
// Meeting Ends    // [ 10, 20, 30 ]

// The numbers of the intervals give chronological orders

// |_____|
//       |______|
// |________|
//         |_______|
// start time array and end time array after sorting

// ||    ||
//      |   |   |  |

var minMeetingRooms = function(intervals) { // 135 ms runtime
    // create new arrays the size of our intervals
    var interLen = intervals.length,
        startPoints = new Array(interLen),
        endPoints = new Array(interLen);

    // populate each array
    for( var i=0; i<interLen; i++ ){
        startPoints[i] = intervals[i].start; // first, with start point times only
        endPoints[i] = intervals[i].end; // second, with end times only
    }

    // sort each array to see which intervals intersect
    startPoints.sort(function(a, b) {
        return a - b;
    });
    endPoints.sort(function(a, b) {
        return a - b;
    });
               // endsP = endPoints pointer
                          // rooms =  keep track of rooms
    for( var j=0, endsP=0, rooms=0; j<startPoints.length; j++ ){ // check each start time
        if( startPoints[j] < endPoints[endsP] ){ // if intervals intersect increment rooms
            rooms++;
        } else { // else check next startPoints and endPoints item
            endsP++;
        }
    }
    // [ 0, 5, 15 ]
    // [ 10, 20, 30 ]
    return rooms;
};
