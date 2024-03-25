/*
Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".

Example 1:
    Input: strs = ["flower","flow","flight"]
    Output: "fl"
Example 2:
    Input: strs = ["dog","racecar","car"]
    Output: ""
    Explanation: There is no common prefix among the input strings.
*/

function longestCommonPrefix(strs) {
  if (strs.length === 0) {
    return "";
  }

  const arrayOfString = strs[0].split("");

  for (let i = 1; i < strs.length; i++) {
    const temp = strs[i].split("");
    for (let j = 0; j < arrayOfString.length; j++) {
      if (arrayOfString[j] !== temp[j]) {
        arrayOfString.splice(j, arrayOfString.length);
        break;
      }
    }
  }

  if (arrayOfString.length === 0) {
    return "";
  } else {
    return arrayOfString.join("");
  }
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
