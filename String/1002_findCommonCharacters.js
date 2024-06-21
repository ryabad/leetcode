/*
Given a string array words, return an array of all characters that show up in all strings within the words (including duplicates). You may return the answer in any order.

Example 1:
    Input: words = ["bella","label","roller"]
    Output: ["e","l","l"]
    
Example 2:
    Input: words = ["cool","lock","cook"]
    Output: ["c","o"]

Constraints:
    1 <= words.length <= 100
    1 <= words[i].length <= 100
    words[i] consists of lowercase English letters.
*/

/**
 * @param {string[]} words
 * @return {string[]}
 */

//1nd solution without using any built-in function
function commonChars(words) {
  const firstWordDict = {};
  const result = [];

  for (let item of words[0]) {
    firstWordDict[item] = (firstWordDict[item] || 0) + 1;
  }

  for (let i = 1; i < words.length; i++) {
    const tempDict = {};
    for (let item of words[i]) {
      tempDict[item] = (tempDict[item] || 0) + 1;
    }

    for (let item in firstWordDict) {
      if (!(item in tempDict)) {
        delete firstWordDict[item];
        continue;
      }

      if (firstWordDict[item] > tempDict[item]) {
        firstWordDict[item] = tempDict[item];
      }
    }
  }

  for (let item in firstWordDict) {
    while (firstWordDict[item] !== 0) {
      result.push(item);
      firstWordDict[item]--;
    }
  }

  return result;
}

//2nd solition with using built-in function
function commonC(words) {
  const ans = [];
  for (let i = 0; i < words[0].length; i++) {
    if (words.every((item) => item.includes(words[0][i]))) {
      ans.push(words[0][i]);
      words = words.map((unit) => unit.replace(words[0][i], " "));
    }
  }
  return ans;
}

console.log(commonChars(["bella", "label", "roller"]));
console.log(commonChars(["cool", "lock", "cook"]));
console.log(commonC(["bella", "label", "roller"]));
console.log(commonC(["cool", "lock", "cook"]));
