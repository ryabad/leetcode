/*
Given a pattern and a string s, find if s follows the same pattern.
Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

Example 1:
    Input: pattern = "abba", s = "dog cat cat dog"
    Output: true

Example 2:
    Input: pattern = "abba", s = "dog cat cat fish"
    Output: false

Example 3:
    Input: pattern = "aaaa", s = "dog cat cat dog"
    Output: false 

Constraints:
    1 <= pattern.length <= 300
    pattern contains only lower-case English letters.
    1 <= s.length <= 3000
    s contains only lowercase English letters and spaces ' '.
    s does not contain any leading or trailing spaces.
    All the words in s are separated by a single space.
*/

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
function wordPattern(pattern, s) {
  const word = s.split(" ");

  if (pattern.length !== word.length) {
    return false;
  }

  const book = {};

  for (let i = 0; i < pattern.length; i++) {
    if (!book[pattern[i]]) {
      book[pattern[i]] = word[i];
    }

    if (book[pattern[i]] !== word[i]) {
      return false;
    }
  }

  const filteredArray = word.filter(
    (item, index) => word.indexOf(item) === index
  );

  return filteredArray.length === Object.keys(book).length;
}

console.log(wordPattern("abba", "dog cat cat dog"));
console.log(wordPattern("abba", "dog dog dog dog"));
