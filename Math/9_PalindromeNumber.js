/*
Given an integer x, return true if x is a palindrome, and false otherwise.

Example 1:
    Input: x = 121
    Output: true
    Explanation: 121 reads as 121 from left to right and from right to left.

Example 2:
    Input: x = -121
    Output: false
    Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

Example 3:
    Input: x = 10
    Output: false
    Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
*/

//1st solution
/**
 * @param {number} x
 * @return {boolean}
 */

function isPalindrome(x) {
  const stringX = x.toString();
  const reversed = stringX.split("").reverse().join("");

  return stringX === reversed;
}

console.log(isPalindrome(1221));

//2nd solution

function isPalindrome2(x) {
  const stringX = x.toString();

  let i = 0; //moving from left
  let j = stringX.length - 1; //moving from right

  while (i < j) {
    if (stringX[i] === stringX[j]) {
      i++;
      j--;
    } else {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome2(1223221));
