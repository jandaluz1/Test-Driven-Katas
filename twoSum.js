function twoSum(array,target){
  let result;
  for(let i = 0; i < array.length; i ++){
    for(let j = 0; j < array.length; j ++){
      if(array[i] + array[j] === target && i !== j ){
        result = [i,j]
        return result;
      }
    }
  }
}

module.exports = twoSum;
