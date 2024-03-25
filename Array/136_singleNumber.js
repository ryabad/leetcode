/*
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
You must implement a solution with a linear runtime complexity and use only constant extra space. 

Example 1:
  Input: nums = [2,2,1]
  Output: 1

Example 2:
  Input: nums = [4,1,2,1,2]
  Output: 4

Example 3:
  Input: nums = [1]
  Output: 1
*/

function singleNumber(nums) {
  const objQuantity = {};

  for (let i of nums) {
    objQuantity[i] = 0;
  }

  for (let i of nums) {
    objQuantity[i]++;
  }

  const keys = Object.keys(objQuantity);

  for (let i = 0; i < keys.length; i++) {
    if (objQuantity[keys[i]] === 1) {
      return Number(keys[i]);
    }
  }
}

console.log(singleNumber([4, 1, 2, 1, 2]));
