// What is Back­track­ing Programming??


// Back­track­ing is a gen­eral algo­rith­mic tech­nique that
// con­sid­ers search­ing every pos­si­ble com­bi­na­tion in order to solve a problem.
// Recur­sion is the key in back­track­ing pro­gram­ming.
// As the name sug­gests we back­track to find the solu­tion.
// We start with one pos­si­ble move out of many avail­able moves and try to solve the prob­lem
// if we are able to solve the prob­lem with the selected move then we will print the solu­tion
// else we will back­track and select some other move and try to solve it.
// If none if the moves work out we will claim that there is no solu­tion for the problem.

// Gen­er­al­ized Algorithm:

// Pick a starting point.
// while(Problem is not solved)
//   For each path from the starting point.
//     check if selected path is safe, if yes select it
//     and make recursive call to rest of the problem
//
//     If recursive calls returns true, then return true.
//     else undo the current move and return false.
//   End For
//   If none of the move works out, return false, NO SOLUTON.


// Prob­lems on Backtracking

 // Back­track­ing — N Queens Problem
// Back­track­ing — Knight’s Tour Problem
// The Word Break Problem
// Back­track­ing — Rat In A Maze Puzzle
// Back­track­ing — Search a Word In a Matrix
