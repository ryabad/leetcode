/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:
    Input: s = "anagram", t = "nagaram"
    Output: true

Example 2:
    Input: s = "rat", t = "car"
    Output: false 

Constraints:
    1 <= s.length, t.length <= 5 * 104
    s and t consist of lowercase English letters.
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isAnagram(s, t) {
  bookS = bookChar(s);
  bookT = bookChar(t);

  if (Object.keys(bookS).length !== Object.keys(bookT).length) {
    return false;
  }

  for (let item in bookS) {
    if (bookS[item] !== bookT[item]) {
      return false;
    }
  }

  return true;
}

function bookChar(text) {
  const char = {};

  for (let i = 0; i < text.length; i++) {
    char[text[i]] = (char[text[i]] || 0) + 1;
  }

  return char;
}

console.log(isAnagram("a", "ab"));
// console.log(isAnagram("anagram", "nagaram"));
