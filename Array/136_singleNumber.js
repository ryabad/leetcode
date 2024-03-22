function singleNumber(nums) {
  const objQuantity = {};

  for (let i of nums) {
    objQuantity[i] = 0;
  }

  for (let i of nums) {
    objQuantity[i]++;
  }

  const keys = Object.keys(objQuantity);

  for (let i = 0; i < keys.length; i++) {
    if (objQuantity[keys[i]] === 1) {
      return Number(keys[i]);
    }
  }
}

console.log(singleNumber([4, 1, 2, 1, 2]));
