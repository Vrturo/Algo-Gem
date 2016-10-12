// Given a collection of intervals, merge all overlapping intervals.

// For example,
// Given [1,3],[2,6],[8,10],[15,18],
// return [1,6],[8,10],[15,18].


/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */


/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */



var merge = function(intervals) {
    if( intervals.length < 1 ) return intervals;
    var start = [],
        end = [];
    for( var i=0; i<intervals.length; i++ ){
        start.push( intervals[i].start );
        end.push( intervals[i].end );
    }
    // if end[i] < start[j]
        // store end
        // j++
    // else
        // store start
        // i++
    var result = [],
        tempStart = start[0];
    for( var j=0, k=0; j< start.length || k<end.length; ){
        if( start[j] < end[k] ){
            tempStart = Math.min(tempStart, start[j]);
            j++;
        } else {
            result.push( [tempStart, end[k+1]] );
            tempStart = start[j];
            k++;
            j++;
        }
    }
        // [ 1, 2, 8, 15 ]
        // [ 3, 6, 10, 18 ]
   return result;

};
