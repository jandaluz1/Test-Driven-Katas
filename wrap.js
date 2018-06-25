// const wrap = function(str, colNum) {
//   const words = str.split(' ');
//   let tempStr = ''
//   let lineLength = 0;
//   return words
//     .map((word, index) => {
//       if (lineLength < colNum) {
//         lineLength += word.length + 1;
//         tempStr+= word + " "
//       } else {
//         lineLength = 0
//         lineLength += word.length + 1
//         temp = tempStr
//         tempStr = ''
//         tempStr += word + " "
//         return temp
//       }
//     })
//     .join('\n');
// };

function wrap(line, maxLen){
  if(line.length <= maxLen){
    return line;
  }
  const indexOfBlank = line.lastIndexOf(' ',maxLen);
  let split;
  let  offset;
  if(indexOfBlank > -1 ){
    split = indexOfBlank
    offset = 1;
  }else {
    split = maxLen;
    offset = 0;
  }
  return line.substring(0,split) + "\n" + wrap(line.substring(split + offset),maxLen)
}

module.exports = wrap;
