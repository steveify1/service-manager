import { expect } from 'chai';
import sample from '../src/index';

describe('Test sample', () => {
  it('should return the argument passed to it as is', () => {
    expect(sample(1)).to.equal(1);
  });
});
