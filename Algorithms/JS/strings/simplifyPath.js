// Simplify Path

// Given an absolute path for a file (Unix-style), simplify it.

// For example,
// path = "/home/", => "/home"
// path = "/a/./b/../../c/", => "/c"

// Corner Cases:

// Did you consider the case where path = "/../"?
// In this case, you should return "/"

// Another corner case is the path might contain multiple slashes '/' together, such as "/home//foo/"
// In this case, you should ignore redundant slashes and return "/home/foo"

/**
 * @param {string} path
 * @return {string}
*/

// create a stack to only keep path names we need at the end
// split path into an array seperated by '/' so it's easier to check out individual elements
// loop through our new path
  // cases :
  // if current element is just one period or empty string we can ignore and continue
  // if current element is '..' we have to back up a directory so we remove last element in our stack
  // anything else gets pushed into our stack
// create an empty string to append items in our stack and return
// loop through stack and append '/' for each item
// if our result string is empty all we have to return is '/'
// if our result string has any item in it, return it


const simplifyPath = function sp(path) {
  const stack = [];
  path = path.split('/');
  for (let i = 0; i < path.length; i += 1) {
    if (path[i] === '.' || path[i] === '') continue;
    if (path[i] === '..') {
      stack.pop();
    } else {
      stack.push(path[i]);
    }
  }
  let result = '';
  for (let j = 0; j < stack.length; j += 1) {
    result = result + '/' + stack[j];
  }
  return result.length ? result : '/';
};

simplifyPath('/a/./b/../../c/');
