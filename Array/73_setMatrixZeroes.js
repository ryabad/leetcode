/*
Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.
You must do it in place.

Example 1:
    (Image Array/img/73/1.png)
    Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
    Output: [[1,0,1],[0,0,0],[1,0,1]]

Example 2:
    (Image Array/img/73/2.png)
    Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
    Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]

Constraints:
    m == matrix.length
    n == matrix[0].length
    1 <= m, n <= 200
    -231 <= matrix[i][j] <= 231 - 1
*/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix) {
  const positionOfZero = [];

  //define position of "0"
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        positionOfZero.push([i, j]);
      }
    }
  }

  //set row and column to 0's
  positionOfZero.forEach((item) => {
    //set row to 0's
    for (let i = 0; i < matrix[0].length; i++) {
      matrix[item[0]][i] = 0;
    }

    //set column to 0's
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][item[1]] = 0;
    }
  });
}

setZeroes([
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
]);

setZeroes([
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5],
]);
