// Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei),
// determine if a person could attend all meetings.

// For example,
// Given [[0, 30],[5, 10],[15, 20]],
// return false.

// [[5, 10],[15, 20],[0, 3]]
// return true

var canAttendMeetings = function(intervals) {
    intervals.sort(function(a, b) {
        return a.start - b.start;
    });
    for( var i=0; i<intervals.length-1; i++ ){
        if( intervals[i].end > intervals[i+1].start ) return false;
    }
    return true;
};
