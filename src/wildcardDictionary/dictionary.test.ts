import { beforeEach, describe, expect, it } from 'vitest';

import WildcardDictionary from './dictionary';

let dictionary: WildcardDictionary;
beforeEach(() => {
  dictionary = new WildcardDictionary();
});

describe('WildcardDictionary#setup', () => {
  it('sets up a dictionary', () => {
    expect(() => dictionary.setup(['cat', 'car', 'bar'])).not.toThrow();
  });
});

describe('WildcardDictionary#isInDict', () => {
  beforeEach(() => {
    dictionary.setup(['cat', 'car', 'bar']);
  });

  describe('with * wildcard in argument', () => {
    it('returns true when word is in the dictionary', () => {
      expect(dictionary.isInDict('*at')).toBe(true);
    });

    it('returns false when word is NOT in the dictionary', () => {
      expect(dictionary.isInDict('cr*')).toBe(false);
    });
  });
});
