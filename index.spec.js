import { expect } from 'chai';
import changeStr from '../index';

describe('#changeStr', () => {
  it('should not change empty string', () => {
    expect(changeStr('')).to.equal('');
  });

  it('should not change words with no vowels', () => {
    expect(changeStr('ntv')).to.equal('ntv');
  });

  it('should change a vowel', () => {
    expect(changeStr('a')).to.equal('summer');
  });

  it('should change consonents and a vowel', () => {
    expect(changeStr('bla')).to.equal('blsummer');
  });

  it('should not change less than 30 percent vowels', () => {
    expect(changeStr('blah')).to.equal('blah');
  });

  it('should change continuous vowels once', () => {
    expect(changeStr('hear')).to.equal('hsummerr');
  });

  it('should change multiple sets of vowels', () => {
    expect(changeStr('blaahah')).to.equal('blsummerhsummerh');
  });

  it('should change capital vowels', () => {
    expect(changeStr('blAhE')).to.equal('blsummerhsummer');
  });

  it('should error on undefined input', () => {
    expect(() => changeStr()).to.throw();
  });
});