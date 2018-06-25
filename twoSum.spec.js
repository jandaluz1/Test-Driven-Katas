const { expect } = require('chai');
const twoSum = require('./twoSum');

describe('twoSum', () => {
  it('Returns index of elements that adds up to target', () => {
    expect(twoSum([1,2,3],5)).to.equal([1,2]);
  });
})
