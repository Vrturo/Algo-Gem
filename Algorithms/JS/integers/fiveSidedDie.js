// You have a function rand7() that generates a random integer from 1 to 7.
// Use it to write a function rand5() that generates a random integer from 1 to 5.

// rand7() returns each integer with equal probability.
// rand5() must also return each integer with equal probability.

// We can write out each possible result from rand7()
// (each of which is equally probable, per the problem statement)
// and see that some results for rand5() are more likely because they are caused by more results from rand7():


rand7() rand5()
1       2
2       3
3       4
4       5
5       1
6       2
7       3
