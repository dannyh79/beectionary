export interface ITrieNode {
  children: Map<string, ITrieNode>;
  isEndOfWord: boolean;
}

export interface IDictionary {
  setup(words: string[]): void;
  isInDict(pattern: string): boolean;
}
