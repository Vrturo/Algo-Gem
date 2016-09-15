// Dynamic Programming is an algorithmic paradigm that solves a given complex problem by breaking it into subproblems
// and stores the results of subproblems to avoid computing the same results again.

// Following are the two main properties of a problem
// that suggest that the given problem can be solved using Dynamic programming.

// 1) Overlapping Subproblems
// 2) Optimal Substructure

// 1) Overlapping Subproblems:

// Like Divide and Conquer, Dynamic Programming combines solutions to sub-problems.
// Dynamic Programming is mainly used when solutions of same subproblems are needed again and again.
// In dynamic programming, computed solutions to subproblems are stored in a table so that these don’t have to recomputed.
// So Dynamic Programming is not useful when there are no common (overlapping)
// subproblems because there is no point storing the solutions if they are not needed again.
// For example, Binary Search doesn’t have common subproblems.
// If we take example of following recursive program for Fibonacci Numbers,
// there are many subproblems which are solved again and again.



/* simple recursive program for Fibonacci numbers */
function fib(n){
   if ( n <= 1 ) return n;

   return fib(n-1) + fib(n-2);
}
