// Given a time in AM/PM format, convert it to military (-hour) time.

// Note: Midnight is  on a -hour clock, and  on a -hour clock. Noon is  on a -hour clock, and  on a -hour clock.

// Input Format

// A single string containing a time in -hour clock format (i.e.:  or ), where .

// Output Format

// Convert and print the given time in -hour format, where .

// Sample Input

// 07:05:45PM

// Sample Output

// 19:05:45

function conversion(time) {
    var ampm = time[time.length-2] + time[time.length-1]
    time = time.slice(0, time.length -1)
    if(ampm === 'AM'){
        console.log(time)
    } else{
       var newtime = Number(time[0] + time[1]) + 12;
       time = time.slice(2, -1);
       time = newtime + time;
       console.log(time)
    }
}
