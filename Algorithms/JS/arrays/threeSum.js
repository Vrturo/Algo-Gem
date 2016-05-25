// Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0?
// Find all unique triplets in the array which gives the sum of zero.

// Note:
// Elements in a triplet (a,b,c) must be in non-descending order. (ie, a ≤ b ≤ c)
// The solution set must not contain duplicate triplets.
//     For example, given array S = {-1 0 1 2 -1 -4},

//     A solution set is:
//     (-1, 0, 1)
//     (-1, -1, 2)

// BREAKDOWN PROBLEM

var threeSum = function(nums) {
    var rtn = [];
    if (nums.length < 3) {
        return rtn;
    }
    nums = nums.sort(function(a, b) {
        return a - b;
    });
    for (var i = 0; i < nums.length - 2; i++) {
        if (nums[i] > 0) {
            return rtn;
        }
        if (i > 0 && nums[i] == nums[i - 1]) {
            continue;
        }
        for (var j = i + 1, k = nums.length - 1; j < k;) {
            if (nums[i] + nums[j] + nums[k] === 0) {
                rtn.push([nums[i], nums[j], nums[k]]);
                j++;
                k--;
                while (j < k && nums[j] == nums[j - 1]) {
                    j++;
                }
                while (j < k && nums[k] == nums[k + 1]) {
                    k--;
                }
            } else if (nums[i] + nums[j] + nums[k] > 0) {
                k--;
            } else {
                j++;
            }
        }
    }
    return rtn;
};


// BREAKDOWN PROBLEM

var threeSum = function(nums) {
    nums = nums.sort(function(a, b) { return a - b; });

    var results = [];
    var i, j, k, n = nums.length;

    for (i = 0; i < n; ++i) {
        if (i > 0 && nums[i] === nums[i-1]) continue;

        for (j = i + 1; j < n; ++j) {
            if (j > i + 1 && nums[j] === nums[j-1]) continue;

            for (k = j + 1; k < n; ++k) {
                if (k > j + 1 && nums[k] === nums[k-1]) continue;

                if (nums[i] + nums[j] + nums[k] === 0) results.push([nums[i], nums[j], nums[k]]);
            }
        }
    }
    return results;
};
