/*
 *    Minimum Steps to One
 *
 *     Given a positive integer, you can perform any combination of these 3 steps:
 *      1.) Subtract 1 from it.
 *      2.) If its divisible by 2, divide by 2.
 *      3.) If its divisible by 3, divide by 3.
 *
 *     Find the minimum number of steps that it takes get from N to 1
 *
 *  Input: Positive Integer N
 *  Output:Integer
 */



function minStepsToOne(n, steps=0){
  if( n === 1 ) return steps;

  if( n % 3 === 0 ) return minStepsToOne(n/3, steps+=1)
  if( n % 2 === 0 ) return minStepsToOne(n/2, steps+=1)
  return minStepsToOne(n-=1, steps+=1)
}

console.log(minStepsToOne(11))
