/*
Given an integer numRows, return the first numRows of Pascal's triangle.
In Pascal's triangle, each number is the sum of the two numbers directly above it

Example 1:
    Input: numRows = 5
    Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
Example 2:
    Input: numRows = 1
    Output: [[1]]
*/

/**
 * @param {number} numRows
 * @return {number[][]}
 */

function generate(numRows) {
  const result = [];

  let counter = 0;

  while (counter < numRows) {
    const temp = [];
    while (temp.length !== counter + 1) {
      temp.push(1);
    }
    counter++;
    result.push(temp);
  }

  if (numRows > 2) {
    for (let i = 2; i < result.length; i++) {
      for (let j = 1; j < result[i].length - 1; j++) {
        result[i][j] = result[i - 1][j - 1] + result[i - 1][j];
      }
    }
  }

  return result;
}

console.log(generate(8));
