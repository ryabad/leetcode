/*
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

Example 1:
    Input: x = 123
    Output: 321

Example 2:
    Input: x = -123
    Output: -321

Example 3:
    Input: x = 120
    Output: 21

Constraints:
    -2^31 <= x <= 2^31 - 1
*/

/**
 * @param {number} x
 * @return {number}
 */
function reverse(x) {
  const maxInt = Math.pow(2, 31) - 1;
  const minInt = Math.pow(-2, 31);

  let reversed = 0;
  const sign = x > 0 ? 1 : -1;
  x = Math.abs(x);

  while (x) {
    const temp = x % 10;
    reversed = reversed * 10 + temp;
    x = (x - temp) / 10;
  }

  if (reversed < minInt || reversed > maxInt) {
    return 0;
  }

  return reversed * sign;
}

console.log(reverse(-1222));
