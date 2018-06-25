const wrap = function(str, colNum) {
  const words = str.split(' ');
  return words
    .map((word, index) => {
      let lineLength = 0;
      if (lineLength < colNum) {
        lineLength += word.length;
        return word;
      } else {
        lineLength = 0;
        return '\n' + word;
      }
    })
    .join(' ');
};

module.exports = wrap;
