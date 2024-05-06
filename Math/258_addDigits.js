/*
Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

Example 1:
    Input: num = 38
    Output: 2
    Explanation: The process is
    38 --> 3 + 8 --> 11
    11 --> 1 + 1 --> 2 
    Since 2 has only one digit, return it.

Example 2:
    Input: num = 0
    Output: 0
 
Constraints:
    0 <= num <= 231 - 1
*/

/**
 * @param {number} num
 * @return {number}
 */
function addDigits(num) {
  let number = num.toString();

  if (number.length === 1) {
    return num;
  }

  let sum = 0;
  for (let i = 0; i < number.length; i++) {
    sum = sum + Number(number[i]);
  }

  let result = addDigits(sum);
  return result;
}

console.log(addDigits(5));
console.log(addDigits(1930));
