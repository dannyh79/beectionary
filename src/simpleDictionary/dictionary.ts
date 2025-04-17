import { IDictionary } from '../types';

export default class SimpleDictionary implements IDictionary {
  data = new Map<string, boolean>();

  setup(words: string[]): void {
    for (const word of words) {
      this.data.set(word, true);
    }
  }

  isInDict(word: string): boolean {
    return this.data.has(word);
  }
}
