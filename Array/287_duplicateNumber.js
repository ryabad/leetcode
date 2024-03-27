/*
Given an array of integers nums containing n + 1 integers where each integer is in the range[1, n] inclusive.
There is only one repeated number in nums, return this repeated number.
You must solve the problem without modifying the array nums and uses only constant extra space.

Example 1:
    Input: nums = [1,3,4,2,2]
    Output: 2

Example 2:
    Input: nums = [3,1,3,4,2]
    Output: 3

Example 3:
    Input: nums = [3,3,3,3,3]
    Output: 3
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
function findDuplicate(nums) {
  const char = {};

  for (let item of nums) {
    char[item] = (char[item] || 0) + 1;
    if (char[item] > 1) {
      return item;
    }
  }
}

//2nd

function findDuplicate2(nums) {
  const seen = new Set();

  for (let num of nums) {
    if (seen.has(num)) {
      return num;
    }

    seen.add(num);
  }

  return -1;
}

//3rd

function findDuplicate3(nums) {
  let slow = nums[0];
  let fast = nums[0];
  while (true) {
    slow = nums[slow];
    fast = nums[nums[fast]];
    if (slow === fast) break;
  }

  slow = nums[0];
  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[fast];
  }

  return slow;
}

console.log(findDuplicate3([1, 2, 3, 4, 5, 5]));
