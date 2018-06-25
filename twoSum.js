function twoSum(array, target) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i] + array[j] === target && i !== j) {
        result.push(i);
        result.push(j);
        return result;
      }
    }
  }
  return result;
}

module.exports = twoSum;
