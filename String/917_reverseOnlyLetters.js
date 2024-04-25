/*
Given a string s, reverse the string according to the following rules:
All the characters that are not English letters remain in the same position.
All the English letters (lowercase or uppercase) should be reversed.
Return s after reversing it.

Example 1:
    Input: s = "ab-cd"
    Output: "dc-ba"

Example 2:
    Input: s = "a-bC-dEf-ghIj"
    Output: "j-Ih-gfE-dCba"

Example 3:
    Input: s = "Test1ng-Leet=code-Q!"
    Output: "Qedo1ct-eeLg=ntse-T!"
 
Constraints:
    1 <= s.length <= 100
    s consists of characters with ASCII values in the range [33, 122].
    s does not contain '\"' or '\\'.
*/

/**
 * @param {string} s
 * @return {string}
 */
function reverseOnlyLetters(s) {
  const arrayOfChars = s.split("");

  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    while (
      !(
        (s.charCodeAt(left) >= 97 && s.charCodeAt(left) <= 122) ||
        (s.charCodeAt(left) >= 65 && s.charCodeAt(left) <= 90)
      ) &&
      left < s.length
    ) {
      left++;
    }

    while (
      !(
        (s.charCodeAt(right) >= 97 && s.charCodeAt(right) <= 122) ||
        (s.charCodeAt(right) >= 65 && s.charCodeAt(right) <= 90)
      ) &&
      right > 0
    ) {
      right--;
    }

    if (left === s.length || right === 0 || left > right) {
      return arrayOfChars.join("");
    }

    let temp = arrayOfChars[left];
    arrayOfChars[left] = arrayOfChars[right];
    arrayOfChars[right] = temp;
    left++;
    right--;
  }

  return arrayOfChars.join("");
}

console.log(reverseOnlyLetters("?6C40E"));
