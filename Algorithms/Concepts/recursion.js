// Recursion is a programming concept. The textbook definition of recursion is calling a function on itself.

// A class of objects or methods exhibit recursive behavior when they can be defined by two properties:

//   A simple base case (or cases)—a terminating scenario that does not use recursion to produce an answer
//   A set of rules that reduce all other cases toward the base case

// Recursive functions and algorithms

  // A common computer programming tactic is to divide a problem into sub-problems of the same type as the original,
  // solve those sub-problems, and combine the results. This is often referred to as the divide-and-conquer method;
  // when combined with a lookup table that stores the results of solving sub-problems
  // (to avoid solving them repeatedly and incurring extra computation time),
  // it can be referred to as dynamic programming or memoization.

  // A recursive function definition has one or more base cases,
  // meaning input(s) for which the function produces a result trivially (without recurring),
  // and one or more recursive cases, meaning input(s) for which the program recurs (calls itself).

  // For example, the factorial function can be defined recursively by the equations 0! = 1 and, for all n > 0, n! = n(n − 1)!.
  // Neither equation by itself constitutes a complete definition; the first is the base case, and the second is the recursive case.
  // Because the base case breaks the chain of recursion, it is sometimes also called the "terminating case".

  // The job of the recursive cases can be seen as breaking down complex inputs into simpler ones.
  // In a properly designed recursive function, with each recursive call,
  // the input problem must be simplified in such a way that eventually the base case must be reached.
  // (Functions that are not intended to terminate under normal circumstances—for example,
  //   some system and server processes—are an exception to this.) Neglecting to write a base case,
  // or testing for it incorrectly, can cause an infinite loop.

  // For some functions (such as one that computes the series for e = 1/0! + 1/1! + 1/2! + 1/3! + ...)
  // there is not an obvious base case implied by the input data; for these one may add a parameter
  // (such as the number of terms to be added, in our series example) to provide a 'stopping criterion'
  // that establishes the base case. Such an example is more naturally treated by co-recursion,
  // where successive terms in the output are the partial sums;
  // this can be converted to a recursion by using the indexing parameter to say "compute the nth term (nth partial sum)".


// Types of recursion

//   Single recursion and multiple recursion
//     Recursion that only contains a single self-reference is known as single recursion,
//     while recursion that contains multiple self-references is known as multiple recursion.
//     Standard examples of single recursion include list traversal, such as in a linear search,
//     or computing the factorial function, while standard examples of multiple recursion include tree traversal,
//     such as in a depth-first search.

//     Single recursion is often much more efficient than multiple recursion,
//     and can generally be replaced by an iterative computation, running in linear time and requiring constant space.
//     Multiple recursion, by contrast, may require exponential time and space, and is more fundamentally recursive,
//     not being able to be replaced by iteration without an explicit stack.

//     Multiple recursion can sometimes be converted to single recursion (and, if desired, thence to iteration).
//     For example, while computing the Fibonacci sequence naively is multiple iteration,
//     as each value requires two previous values,
//     it can be computed by single recursion by passing two successive values as parameters.
//     This is more naturally framed as corecursion, building up from the initial values,
//     tracking at each step two successive values. A more sophisticated example is using a threaded binary tree,
//     which allows iterative tree traversal, rather than multiple recursion.

