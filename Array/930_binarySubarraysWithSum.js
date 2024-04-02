/*
Given a binary array nums and an integer goal, return the number of non - empty subarrays with a sum goal.
A subarray is a contiguous part of the array.
Example 1:
    Input: nums = [1,0,1,0,1], goal = 2
    Output: 4
    Explanation: The 4 subarrays are bolded and underlined below:
    [1,0,1,0,1]
    [1,0,1,0,1]
    [1,0,1,0,1]
    [1,0,1,0,1]
Example 2:
    Input: nums = [0,0,0,0,0], goal = 0
    Output: 15
*/

/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */

function numSubarraysWithSum(nums, goal) {
  if (nums === null || nums.length === 0) {
    return 0;
  }

  let counter = 0;
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    if (sum === goal) {
      counter++;
    }

    for (let j = i + 1; j < nums.length; j++) {
      sum += nums[j];

      if (sum === goal) {
        counter++;
      }

      if (sum > goal) {
        sum = 0;
        break;
      }

      if (j === nums.length - 1) {
        sum = 0;
      }
    }
  }

  return counter;
}

console.log(numSubarraysWithSum([1, 0, 1, 0, 1], 2));
console.log(numSubarraysWithSum([0, 0, 0, 0, 0], 0));
console.log(numSubarraysWithSum([0, 0, 0, 0, 1], 2));
