/*
Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.

Example 1:
    Input: nums1 = [1,2,2,1], nums2 = [2,2]
    Output: [2]

Example 2:
    Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
    Output: [9,4]
    Explanation: [4,9] is also accepted.
*/

function intersection(nums1, nums2) {
  const unique = nums1.filter((item, index) => nums1.indexOf(item) === index);
  return unique.filter((item) => nums2.includes(item) === true);
}

console.log(intersection([1, 1, 1, 2, 3, 4], [2, 3, 41, 2, 2]));
