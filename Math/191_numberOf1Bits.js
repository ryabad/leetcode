/*
Write a function that takes the binary representation of a positive integer and returns the number of set bits it has (also known as the Hamming weight).

Example 1:
    Input: n = 11
    Output: 3
    Explanation:
    The input binary string 1011 has a total of three set bits.

Example 2:
    Input: n = 128
    Output: 1
    Explanation:
    The input binary string 10000000 has a total of one set bit.

Example 3:
    Input: n = 2147483645
    Output: 30
    Explanation:
    The input binary string 1111111111111111111111111111101 has a total of thirty set bits.

Constraints:
    1 <= n <= 231 - 1
*/

/**
 * @param {number} n
 * @return {number}
 */
function hammingWeight(n) {
  const binary = n.toString(2);

  let counter = 0;

  for (let item of binary) {
    if (item === "1") {
      counter++;
    }
  }

  return counter;
}

console.log(hammingWeight(10));
