const { expect } = require('chai');
const twoSum = require('./twoSum');

describe('twoSum', () => {
  it('Returns index of elements that adds up to target', () => {
    expect(twoSum([1, 2, 3], 5)).to.deep.equal([1, 2]);
  });
  it('Returns index of elements that adds up to target', () => {
    expect(twoSum([1, 2, 3, 4, 5, 6], 11)).to.deep.equal([4, 5]);
  });
  it('Returns empty array if there is no solution', () => {
    expect(twoSum([1, 2, 3], 6)).to.deep.equal([]);
  });
});
