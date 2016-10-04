// Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei),
// determine if a person could attend all meetings.

// For example,
// Given [[0, 30],[5, 10],[15, 20]],
// return false.

// [[5, 10],[15, 20],[0, 3]]
// return true

var canAttendMeetings = function(intervals) { // 109 ms runtime
    intervals.sort(function(a, b) { // sort intervals incase first set of meeting times is in the back
        return a.start - b.start;
    });
    for( var i=0; i<intervals.length-1; i++ ){ // loop through intervals and stop right before the last one
                                               // because our check involves checking the next interval
        if( intervals[i].end > intervals[i+1].start ) return false; // if the end time is greater than the next interval's
                                                                    // start it has to be false
    }
    return true; // if there arent any crossing intervals, its true
};
