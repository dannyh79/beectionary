import { beforeEach, describe, expect, it } from 'vitest';
import SimpleDictionary from './dictionary';

let dictionary: SimpleDictionary;
beforeEach(() => {
  dictionary = new SimpleDictionary();
});

describe('SimpleDictionary#setup', () => {
  it('sets up a dictionary', () => {
    expect(() => dictionary.setup(['cat', 'car', 'bar'])).not.toThrow();
  });
});

describe('SimpleDictionary#isInDict', () => {
  beforeEach(() => {
    dictionary.setup(['cat', 'car', 'bar']);
  });

  it('returns true when word is in the dictionary', () => {
    expect(dictionary.isInDict('cat')).toBe(true);
  });

  it('returns false when word is NOT in the dictionary', () => {
    expect(dictionary.isInDict('bat')).toBe(false);
  });
});
