/*
Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

Example 1:
    Input: s = "Let's take LeetCode contest"
    Output: "s'teL ekat edoCteeL tsetnoc"

Example 2:
    Input: s = "Mr Ding"
    Output: "rM gniD"
 
Constraints:
    1 <= s.length <= 5 * 104
    s contains printable ASCII characters.
    s does not contain any leading or trailing spaces.
    There is at least one word in s.
    All the words in s are separated by a single space.
*/

/**
 * @param {string} s
 * @return {string}
 */
function reverseWords(s) {
  let result = "";
  const arrayOfWords = s.split(" ");

  for (let i = 0; i < arrayOfWords.length; i++) {
    let string = arrayOfWords[i].split("");
    let left = 0;
    let right = string.length - 1;
    let temp = "";
    while (left < right) {
      temp = string[left];
      string[left] = string[right];
      string[right] = temp;
      left++;
      right--;
    }
    result = result + string.join("") + " ";
  }

  return result.trim();

  //solution in one line using string/array methods
  //return s.split(' ').map(c => c.split('').reverse().join('')).join(' ');
}

console.log(reverseWords("Mr Ding"));
console.log(reverseWords("Let's take LeetCode contest"));
