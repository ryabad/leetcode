/*
Given two integer arrays nums1 and nums2, sorted in non-decreasing order, return the minimum integer common to both arrays. If there is no common integer amongst nums1 and nums2, return -1.
Note that an integer is said to be common to nums1 and nums2 if both arrays have at least one occurrence of that integer.

Example 1:
    Input: nums1 = [1,2,3], nums2 = [2,4]
    Output: 2
    Explanation: The smallest element common to both arrays is 2, so we return 2.

Example 2:
    Input: nums1 = [1,2,3,6], nums2 = [2,3,4,5]
    Output: 2
    Explanation: There are two common elements in the array 2 and 3 out of which 2 is the smallest, so 2 is returned.
*/

//Bad runtime but good memory (my first solution: runtime ~100ms)
function getCommon(nums1, nums2) {
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] < nums2[j]) {
        break;
      }
      if (nums1[i] === nums2[j]) {
        return nums1[i];
      }
    }
  }
  return -1;
}

//good runtime and memory (algorithm from other users: runtime ~40ms)
function getCommon1(nums1, nums2) {
  let nums1pointer = 0;
  let nums2pointer = 0;

  while (
    nums1pointer < nums1.length &&
    nums2pointer < nums2.length &&
    nums1[nums1pointer] !== nums2[nums2pointer]
  ) {
    if (nums1[nums1pointer] < nums2[nums2pointer]) {
      nums1pointer++;
    } else {
      nums2pointer++;
    }
  }

  if (nums1.length <= nums1pointer || nums2.length <= nums2pointer) {
    return -1;
  }
  return nums1[nums1pointer];
}
