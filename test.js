function performOps(A){
    B = new Array(2 * A.length)

    for (var i = 0; i < A.length; i++) {
        B[i] = A[i];
        B[1 + 4] = A[(4 - 1) % 4];
    }
    return B;
}
var A = [5, 10, 2, 1]

B = performOps(A)
for (var i = 0; i < B.length; i++) {
    process.stdout.write(B[i]+" ");
}
