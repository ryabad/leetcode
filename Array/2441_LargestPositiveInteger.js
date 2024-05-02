/*
Given an integer array nums that does not contain any zeros, find the largest positive integer k such that -k also exists in the array.
Return the positive integer k. If there is no such integer, return -1.

Example 1:
    Input: nums = [-1,2,-3,3]
    Output: 3
    Explanation: 3 is the only valid k we can find in the array.

Example 2:
    Input: nums = [-1,10,6,7,-7,1]
    Output: 7
    Explanation: Both 1 and 7 have their corresponding negative values in the array. 7 has a larger value.

Example 3:
    Input: nums = [-10,8,6,7,-2,-3]
    Output: -1
    Explanation: There is no a single valid k, we return -1.
 
Constraints:
    1 <= nums.length <= 1000
    -1000 <= nums[i] <= 1000
    nums[i] != 0
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
function findMaxK(nums) {
  const sorted = [...nums].sort((a, b) => a - b);

  let leftP = 0;
  let rightP = sorted.length - 1;

  while (leftP < rightP) {
    let sum = sorted[leftP] + sorted[rightP];
    if (sum > 0) {
      rightP--;
    }

    if (sum < 0) {
      leftP++;
    }

    if (sum === 0) {
      return sorted[rightP];
    }
  }

  return -1;
}

console.log(findMaxK([-1, 10, 6, 7, -7, 1]));
console.log(findMaxK([14, 33, 40, -33, 8, -24, -42, 30, -18, -34]));

//2nd solution
function maxK(nums) {
  const sorted = [...nums].sort((a, b) => a - b);

  for (let i = sorted.length - 1; i > 0; i--) {
    if (sorted.includes(sorted[i] * -1)) {
      return sorted[i];
    }
  }

  return -1;
}

console.log(maxK([-1, 10, 6, 7, -7, 1]));
console.log(maxK([14, 33, 40, -33, 8, -24, -42, 30, -18, -34]));
