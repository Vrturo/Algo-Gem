Simplify Path

Given an absolute path for a file (Unix-style), simplify it.

For example,
path = "/home/", => "/home"
path = "/a/./b/../../c/", => "/c"

Corner Cases:

Did you consider the case where path = "/../"?
In this case, you should return "/"

Another corner case is the path might contain multiple slashes '/' together, such as "/home//foo/"
In this case, you should ignore redundant slashes and return "/home/foo"

/**
 * @param {string} path
 * @return {string}
*/

var simplifyPath = function(path) {
    var stack = [];
    path = path.split('/');
    for (var i = 0; i < path.length; i += 1) {
        if (path[i] === '.'){
            continue;
        } else if (path[i] === '..') {
            stack.pop();
        } else if (path[i] === ''){
            continue;
        } else {
            stack.push(path[i]);
        }
    }
    var result = '';
    for(var j = 0; j < stack.length; j += 1) {
       result = result + '/' + stack[j];
    }
    return result.length ? result : '/';
};
