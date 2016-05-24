var addDigits = function(num) {
    if(num<10){
        return num;
    }
    var strArr = num.toString().split("");
    var sum = strArr.reduce((a,b) => Number(a) + Number(b));
    if(sum.toString().split("").length === 1){
        return sum;
    }else{
        addDigits(sum);
    }
};
