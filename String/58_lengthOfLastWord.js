/*
Given a string s consisting of words and spaces, return the length of the last word in the string.
A word is a maximal substring consisting of non-space characters only.

Example 1:
    Input: s = "Hello World"
    Output: 5
    Explanation: The last word is "World" with length 5.

Example 2:
    Input: s = "   fly me   to   the moon  "
    Output: 4
    Explanation: The last word is "moon" with length 4.

Example 3:
    Input: s = "luffy is still joyboy"
    Output: 6
    Explanation: The last word is "joyboy" with length 6.
 
Constraints:
    1 <= s.length <= 104
    s consists of only English letters and spaces ' '.
    There will be at least one word in s.
*/

/**
 * @param {string} s
 * @return {number}
 */

function lengthOfLastWord(s) {
  let string = s.trim();

  let counter = 0;
  let pointer = string.length - 1;

  while (pointer >= 0) {
    if (string[pointer] === " ") {
      break;
    }
    counter++;
    pointer--;
  }

  return counter;
}

//2nd solution
function lengthWord(s) {
  const arrayOfWord = s.trim().split(" ");
  const lastWord = arrayOfWord.length - 1;

  return arrayOfWord[lastWord].length;
}
