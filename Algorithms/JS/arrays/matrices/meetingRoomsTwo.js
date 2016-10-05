// Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei),
// find the minimum number of conference rooms required.

// For example,
// Given [[0, 30],[5, 10],[15, 20]],
// return 2.

var minMeetingRooms = function(intervals) {
    var interLen = intervals.length,
        starts = new Array(interLen),
        ends = new Array(interLen);

    for( var i=0; i<interLen; i++ ){
        starts[i] = intervals[i].start;
        ends[i] = intervals[i].end;
    }
    starts.sort(function(a, b) {
        return a - b;
    });
    ends.sort(function(a, b) {
        return a - b;
    });
    var rooms = 0,
        endsItr = 0;
    for( var j=0; j<starts.length; j++ ){
        if( starts[j]<ends[endsItr] ){
            rooms++;
        } else {
            endsItr++;
        }
    }
    return rooms;
};
