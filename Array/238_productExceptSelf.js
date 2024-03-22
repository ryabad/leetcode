/*
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
You must write an algorithm that runs in O(n) time and without using the division operation.

Example 1:
    Input: nums = [1,2,3,4]
    Output: [24,12,8,6]
Example 2:
    Input: nums = [-1,1,0,-3,3]
    Output: [0,0,9,0,0]
*/

function productExceptSelf(nums) {
  const result = [];

  let left = 0;
  let right = 0;
  let tempEqual = 1;

  while (left < nums.length) {
    if (left === right) {
      right++;
    }

    if (right === nums.length) {
      result.push(tempEqual);
      left++;
      right = 0;
      tempEqual = 1;
    }

    tempEqual = tempEqual * nums[right];
    right++;
  }

  return result;
}

console.log(productExceptSelf([1, 2, 3, 4]));

//solution #2 (better time)
function productExceptSelf1(nums) {
  const n = nums.length;
  const result = [];

  const left = new Array(n).fill(1);
  const right = new Array(n).fill(1);

  for (let i = 1; i < n; i++) {
    left[i] = left[i - 1] * nums[i - 1];
  }

  for (let i = n - 2; i >= 0; i--) {
    right[i] = right[i + 1] * nums[i + 1];
  }

  for (let i = 0; i < n; i++) {
    result[i] = left[i] * right[i];
  }

  return result;
}
