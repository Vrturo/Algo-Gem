
// var search = function(nums, target) {

//     function getPivot(arr){
//         var low = 0,
//             high = arr.length-1,
//             mid
//             result = -1;

//         while( low<= high ){
//             if( arr[low] <= arr[high] ) return low; // means it is sorted
//             mid = Math.floor( (high+low)/2 );
//             var next = (mid+1) % target,
//                 prev = (mid+target-1) % target;
//             if( arr[mid] <= arr[next] && arr[mid] <= arr[prev] ) {
//                 result = mid;
//                 break;
//             } else if( arr[mid] <= arr[high] ){
//                 high = mid-1;
//             } else if( arr[mid] >= arr[low] ){
//                 low = mid+1;
//             }
//         }
//     }
//     // var lo = 0,
//     //     hi = nums.length-1;
//     // while(lo<hi){
//     //     var mid = Math.floor( (lo+hi)/2 );
//     //     if(nums[mid]>nums[hi]) lo = mid+1;
//     //     else hi=mid;
//     // }
//     // console.log(lo, getPivot(nums))
//     var rot = getPivot(nums),
//         lo = 0,
//         hi = nums.length-1;
//         // The usual binary search and accounting for rotation.
//       while(lo<=hi){
//           var mid= Math.floor( (lo+hi)/2 );
//           var realmid = (mid+rot) % nums.length;
//           if(nums[realmid] === target) return realmid;
//           if(nums[realmid]<target){
//               lo = mid+1;
//           } else {
//               hi = mid-1;
//           }
//       }
//       return -1;

// }
// var test = [22,33,44,11]
// console.log( search(test, 22))
 // ---------------------------------------------


// var search = function(nums, target) {

//     var low = 0,
//         high = nums.length-1,
//         mid;

//     while( low<= high ){
//         if( nums[low] <= nums[high] ) return low; // means it is sorted
//         mid = Math.floor( (high+low)/2 );
//         var next = (mid+1) % target,
//             prev = (mid+target-1) % target;
//         if( nums[mid] <= nums[next] && nums[mid] <= nums[prev] ) {
//           return mid
//         } else if( nums[mid] <= nums[high] ){
//           high = mid-1;
//         } else if( nums[mid] >= nums[low] ){
//           low = mid+1;
//         }
//     }
//     return -1;
// }
// var test = [2,3,4,1]
// console.log( search(test, 1) )

// function binarySearch(k, nums){
//     var lo=0,
//         hi=nums.length-1,
//         mid;
//     while(lo<=hi){
//         mid = Math.floor( (lo+hi)/2 );
//         if( k === nums[mid] || k === nums[lo] || k === nums[hi] ) return true;
//         nums[mid] > nums[hi] ? lo=mid+1 : hi=mid;
//     }
//     return false;
// }

// console.log(binarySearch(8, [1, 2, 3, 5, 7, 8]));


// var removeDuplicates = function(nums) {
//   var exists = {};
//   var result = [];
//   var elm;

//   for (var i = 0; i < nums.length; i += 1) {
//     elm = nums[i];
//     if (!exists[elm]) {
//       result.push(elm);
//       exists[elm] = 1;
//     } else {
//       if (exists[elm] === 1)
//         result.push(elm);
//       exists[elm] += 1;
//     }
//   }
//   return result;
// };

// console.log(removeDuplicates([1,1,1,2]))


// Work in progress


// function shortestPathFive(graph, a, b) {
//   const distance = {};
//   const visited = {};
//   let pointer = 0;
//   distance[a.value] = 0;
//   visited[a.value] = true;
//   let toVisit = [a];
//   let val;

//   while (pointer < toVisit.length){
//     val = toVisit[pointer];
//     for (const edge in val.edges) {
//       if (!distance[edge]) distance[edge] = Number.MAX_VALUE;
//       if (!visited[edge]) {
//         visited[edge] = false;
//         toVisit.push(edge);
//       }
//     }
//     pointer += 1
//   }

//   pointer = 0
//   toVisit = [a]
//   let minDistance;
//   while (pointer < toVisit.length) {
//     val = toVisit[pointer];
//     for (const edge in val.edges) {
//       if (!visited[edge]) {
//         minDistance = Math.min(distance[edge], distance[val] + 1)
//         distance[edge] = minDistance;
//         visited[edge] = true;
//         toVisit.push(edge);
//       }
//       if (edge !== val){
//         minDistance = Math.min(distance[edge], distance[val] + 1);
//         distance[edge] = minDistance;
//       }
//     }
//     pointer += 1
//   }
//   return distance[b.value]
// }
// subsets : function(nums){
//         var solution = [],
//             result = [],
//             used = [];

//         var backTracking = function(k, n) {
//             if (k === n) {
//                 return result.push(solution.slice(0));
//             } else {
//               for (var i = 0; i < nums.length; i += 1) {
//                 if (used[i]) continue;
//                 if (k > 0 && solution[k - 1] > nums[i]) continue;
//                 used[i] = true;
//                 solution[k] = nums[i];
//                 backTracking(k + 1, n);
//                 used[i] = false;
//               }
//             }
//         };

//         for (var i = 0; i <= nums.length; i += 1) {
//             backTracking(0, i);
//         }

//         function lexSort(a, b, i) {
//             if(a[i] && b[i]) {
//                 if(a[i] === b[i]) {
//                     lexSort(a, b, i + 1)
//                 } else {
//                     return a[i] - b[i];
//                 }
//             } else {
//                 return a[i] - b[i];
//             }
//         };
//         return result.sort(function(a, b){
//             lexSort(a, b, 0);
//         });
//     }


// var permute = function(nums) {
//   const result = [];
//   helper(nums, 0, result);
//   return result;
// };

// function helper(nums, l, final) {
//     console.log(l)
//     if (l >= nums.length) {
//       let arr = nums.slice();
//       final.push(arr);
//     } else {
//       for (let i = l; i < nums.length; i += 1) {
//         // begin swap
//         let temp = nums[l];
//         nums[l] = nums[i];
//         nums[i] = temp;
//         helper(nums, l += 1, final);
//         // swap back - backtrack
//         temp = nums[l];
//         nums[l] = nums[i];
//         nums[i] = temp;
//       }
//     }
// }

// console.log(permute([1,2,3]))

// function topologicalSort(g){
//   var result = [],
//       visited = {},
//       stack = [];

//   function helper(v) {
//     visited[v] = true;
//     var edges = g.vertices[v];
//     for (var i = 0; i < edges.length; i += 1) {
//       if (!visited[edges[i]]) helper(edges[i]);
//     }
//     result.push(v);
//   }

//   for (var k in g.vertices) { // loop through graph vertices
//     if (!visited[k]) helper(k);
//   }

//   return result;
// }

// console.log(topologicalSort())


// function combinationSum(nums, target){
//     var result = [],
//         map = {};
//     function backtrack(start, buildUp, sum) {
//         if (buildUp.length) sum = buildUp.reduce( (p, c) => p + c );
//         if (sum === target) {
//             temp = buildUp.slice();
//             buildUp.sort();
//             if (!map[buildUp]){
//                 result.push(temp);
//                 map[buildUp] = true;
//             }
//         } else if(sum < target) {
//             for (var i = start; i < nums.length; i += 1) {
//                 buildUp.push(nums[i]);
//                 // sum += nums[i];
//                 backtrack(start, buildUp, sum);
//                 // sum -= nums[i];
//                 buildUp.pop();
//             }
//         }
//     }
//     backtrack(0, [], 0);
//     return result;
// }
// console.log(combinationSum([2, 2, 3, 7], 7))



// function reverseString(string){
//     function helper(first, last, str){
//         console.log(str)
//         if(first === last){
//             return str.join('');
//         } else {
//             swap(first, last, str);
//             return helper(first + 1, last - 1, str);
//         }
//     }

//     function swap(a, b, string){ // letters h, o
//         var temp = string[a]; // a = 'h', b = 'o'
//         string[a] = string[b]; // a = 'o', b = 'o'
//         string[b] = temp; // b = 'h'
//     }

//     return helper(0, string.length - 1, string.split(''));
// }

// console.log(reverseString('hello'));


function titleCase(str) {
  var words = str.split(' '),
      result = [];
  for (var i = 0; i < words.length; i += 1) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  return words.join(' ');
}

console.log(titleCase("I'm a little tea pot"));

