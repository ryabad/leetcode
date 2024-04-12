/*
Given a string s. Return all the words vertically in the same order in which they appear in s.
Words are returned as a list of strings, complete with spaces when is necessary. (Trailing spaces are not allowed).
Each word would be put on only one column and that in one column there will be only one word.

Example 1:
    Input: s = "HOW ARE YOU"
    Output: ["HAY","ORO","WEU"]
    Explanation: Each word is printed vertically. 
    "HAY"
    "ORO"
    "WEU"

Example 2:
    Input: s = "TO BE OR NOT TO BE"
    Output: ["TBONTB","OEROOE","   T"]
    Explanation: Trailing spaces is not allowed. 
    "TBONTB"
    "OEROOE"
    "   T"

Example 3:
    Input: s = "CONTEST IS COMING"
    Output: ["CIC","OSO","N M","T I","E N","S G","T"]
 
Constraints:
    1 <= s.length <= 200
    s contains only upper case English letters.
    It's guaranteed that there is only one space between 2 words.
*/

/**
 * @param {string} s
 * @return {string[]}
 */
function printVertically(s) {
  const result = [];
  const wordArrays = s.split(" ");
  let longest = 0;

  for (let word of wordArrays) {
    let length = word.length;
    if (length > longest) {
      longest = length;
    }
  }

  for (let i = 0; i < longest; i++) {
    let word = "";

    for (let j = 0; j < wordArrays.length; j++) {
      if (!wordArrays[j][i]) {
        word = word + " ";
      } else {
        word = word + wordArrays[j][i];
      }
    }

    result.push(word.trimEnd());
  }

  return result;
}

console.log(printVertically("Hello My Friends"));
