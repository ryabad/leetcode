/*
Given an array nums of size n, return the majority element.
The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array. 

Example 1:
    Input: nums = [3,2,3]
    Output: 3

Example 2:
    Input: nums = [2,2,1,1,1,2,2]
    Output: 2

Constraints:
    n == nums.length
    1 <= n <= 5 * 104
    -109 <= nums[i] <= 109
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
function majorityElement(nums) {
  const books = {};

  for (let item of nums) {
    books[item] = (books[item] || 0) + 1;
  }

  let counter = 0;
  let majority;

  for (let item in books) {
    if (books[item] > counter) {
      counter = books[item];
      majority = Number(item);
    }
  }

  return majority;
}

console.log(majorityElement([3, 2, 3]));
