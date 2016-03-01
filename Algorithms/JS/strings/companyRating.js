function merge(l, r){

    var result = [];
    var p1 = 0;
    var p2 = 0;

    while (p1 < l.length && p2 < r.length) {
        if (l[p1][1] >= r[p2][1]) {
            result.push(l[p1]);
            p1++;
        } else {
            result.push(r[p2]);
            p2++;
        }
    }
    while (p1 < l.length){
        result.push(l[p1]);
        p1++;
    }
    while (p2 < r.length){
        result.push(r[p2]);
        p2++;
    }
    return result;
}

function mergeSort(arr){
    if (arr.length < 2){
        return arr;
     }
    var mid = parseInt(arr.length / 2);
    var left   = arr.slice(0, mid);
    var right  = arr.slice(mid, arr.length);

    return merge(mergeSort(left), mergeSort(right));
}

var companyRating = function(input){
     var work = input.split("\n");
    for(var i = 0; i<work.length; i++){
        work[i] = work[i].split(" ")
    }
    work = mergeSort(work);
    for(var i = 0; i < work.length; i++){
        work[i] = work[i].join(" ")
    }
    console.log(work.join("\n"))
};

test = "1005 2\n1001 5\n1002 5\n1004 1";
console.log(companyRating(test))
