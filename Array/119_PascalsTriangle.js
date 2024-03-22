/*
Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.
In Pascal's triangle, each number is the sum of the two numbers directly above it

Example 1:
    Input: rowIndex = 3
    Output: [1,3,3,1]

Example 2:
    Input: rowIndex = 0
    Output: [1]

Example 3:
    Input: rowIndex = 1
    Output: [1,1]
*/

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
function getRow(rowIndex) {
  const result = [];

  let counter = 0;

  while (counter < rowIndex + 1) {
    const temp = [];
    while (temp.length !== counter + 1) {
      temp.push(1);
    }
    counter++;
    result.push(temp);
  }

  if (rowIndex + 1 > 2) {
    for (let i = 2; i < result.length; i++) {
      for (let j = 1; j < result[i].length - 1; j++) {
        result[i][j] = result[i - 1][j - 1] + result[i - 1][j];
      }
    }
  }

  return result[rowIndex];
}
