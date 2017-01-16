
var search = function(nums, target) {

    function getPivot(arr){
        var low = 0,
            high = arr.length-1,
            mid
            result = -1;

        while( low<= high ){
            if( arr[low] <= arr[high] ) return low; // means it is sorted
            mid = Math.floor( (high+low)/2 );
            var next = (mid+1) % target,
                prev = (mid+target-1) % target;
            if( arr[mid] <= arr[next] && arr[mid] <= arr[prev] ) {
                result = mid;
                break;
            } else if( arr[mid] <= arr[high] ){
                high = mid-1;
            } else if( arr[mid] >= arr[low] ){
                low = mid+1;
            }
        }
    }
    // var lo = 0,
    //     hi = nums.length-1;
    // while(lo<hi){
    //     var mid = Math.floor( (lo+hi)/2 );
    //     if(nums[mid]>nums[hi]) lo = mid+1;
    //     else hi=mid;
    // }
    // console.log(lo, getPivot(nums))
    var rot = getPivot(nums),
        lo = 0,
        hi = nums.length-1;
        // The usual binary search and accounting for rotation.
      while(lo<=hi){
          var mid= Math.floor( (lo+hi)/2 );
          var realmid = (mid+rot) % nums.length;
          if(nums[realmid] === target) return realmid;
          if(nums[realmid]<target){
              lo = mid+1;
          } else {
              hi = mid-1;
          }
      }
      return -1;

}
var test = [22,33,44,11]
console.log( search(test, 22))
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
