/*
You are given an array nums consisting of positive integers.
Return the total frequencies of elements in nums such that those elements all have the maximum frequency.
The frequency of an element is the number of occurrences of that element in the array
 
Example 1:
  Input: nums = [1,2,2,3,1,4]
  Output: 4
  Explanation: The elements 1 and 2 have a frequency of 2 which is the maximum frequency in the array.
  So the number of elements in the array with maximum frequency is 4.

Example 2:
  Input: nums = [1,2,3,4,5]
  Output: 5
  Explanation: All elements of the array have a frequency of 1 which is the maximum.
  So the number of elements in the array with maximum frequency is 5.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function (nums) {
  sortedArray = [...nums].sort((a, b) => a - b);

  let maxFrequency = 1;
  let currentFrequency = 1;
  let steps = 1;
  let tempNumber;

  for (let i = 0; i < sortedArray.length; i++) {
    if (tempNumber !== sortedArray[i]) {
      tempNumber = sortedArray[i];

      if (maxFrequency < currentFrequency) {
        maxFrequency = currentFrequency;
        steps = 1;
      }

      currentFrequency = 1;
      continue;
    }
    if (tempNumber === sortedArray[i]) {
      currentFrequency++;
    }

    if (maxFrequency === currentFrequency) {
      steps++;
    }
  }

  if (maxFrequency === 1) {
    return nums.length;
  } else {
    return maxFrequency * steps;
  }
};

console.log(maxFrequencyElements([1, 17, 12, 7, 17, 3]));
