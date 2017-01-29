Amazon Final Technical Interview. Software Development Engineer, Traffic Management role

10 min Intro
Why do you want to work at Amazon?
10 min on an algo question (no coding, jsut explaining)
  - Given an x amount of correctly spelled words, A user wants you to build a program that does a spell check on emails
    You may choose whichever way you want to organize or build this application
20 min on two algorithm questions
15 min of OO Design Questions
  - How would you design a parking garage object that tracks the cars that are parked
    inside and has four different types of spots:
    motorcycle, EV, compact, regular

// Algorithms

Given an stream of strings as input, return the highest occuring string in the stream.
Assume the stream interface only has the following public methods:

hasNext() --> returns a boolean
getNext() --> returns the next string

Example:
Input: 'a' --> 'bb' --> 'ccc' --> 'z' --> 'ccc' --> 'bb' --> 'a' --> 'dd'
Return: 'z'

If there are multiple strings that ocurr once, return the first unique string.

function highestOccurence(input){
  // write code here
}

// --------------------------------------------------------------------------------

Given an stream of strings as input, return the first unique string in the stream.
Assume the stream interface only has the following public methods:

hasNext() --> returns a boolean
getNext() --> returns the next string

Example:
Input: 'a' --> 'bb' --> 'ccc' --> 'z' --> 'ccc' --> 'bb' --> 'a' --> 'dd'
Return: 'z'

function uniqueOccurence(input){
    // write code here
}

