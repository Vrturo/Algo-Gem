// Given two arrays, write a function to compute their intersection.

// Example:
// Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2].

// Note:
// Each element in the result must be unique.
// The result can be in any order.


var intersection = function(nums1, nums2) {
    var set = new Set(nums1);
    return [...new Set(nums2.filter(n => set.has(n)))];
};
