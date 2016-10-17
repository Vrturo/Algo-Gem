
// If you had an app that plays videos, and it saves a position if someone leaves a video,
// can you write 2 function which when a video is played,

// One which saves the position of a video when they leave?

// One to which restores the last position they were at given the name or ID of the video?

// // one function saves the time
// // function
// // after 100 videos frop a time

// // id, postion
var q = []; // [id, time]

function save(id, time){
    map[id] = time;
    for( var i=0; i<q.length; i++ ){
        if(id === q[i]){
            q.splice(i, 1)
         }
    }
    q.push(id);

}

function play(id){
    return map[id];
    for( var i=0; i<q.length; i++ ){
        if(id === q[i][1]){
            return q[i][1]
         }
    }
}
