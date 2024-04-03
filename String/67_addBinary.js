/*
Given two binary strings a and b, return their sum as a binary string.

Example 1:
    Input: a = "11", b = "1"
    Output: "100"

Example 2:
    Input: a = "1010", b = "1011"
    Output: "10101"

Constraints:
    1 <= a.length, b.length <= 104
    a and b consist only of '0' or '1' characters.
    Each string does not contain leading zeros except for the zero itself.
*/

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
function addBinary(a, b) {
  let numberA = a;
  let numberB = b;

  while (numberA.length < numberB.length) {
    numberA = "0" + numberA;
  }

  while (numberB.length < numberA.length) {
    numberB = "0" + numberB;
  }

  let result = "";
  let temp = 0;

  for (let i = numberA.length - 1; i >= 0; i--) {
    let sum = temp + Number(numberA[i]) + Number(numberB[i]);

    result = (sum % 2) + result;
    temp = Math.floor(sum / 2);

    if (i === 0 && temp) {
      result = "1" + result;
    }
  }

  return result;
}

console.log(addBinary("1011", "111"));
