import { IDictionary, ITrieNode } from '../types';

class TrieNode implements ITrieNode {
  children: Map<string, ITrieNode>;
  isEndOfWord: boolean;

  constructor(children: Map<string, ITrieNode>, isEndOfWord: boolean) {
    this.children = children;
    this.isEndOfWord = isEndOfWord;
  }
}

/** Return a TrieNode instance with no children and isEndOfWord as `true`. */
const newTrieNode = () => new TrieNode(new Map<string, ITrieNode>(), true);

const wildcardCharacter = '*';

export default class WildcardDictionary implements IDictionary {
  dataRoot: ITrieNode;

  constructor(private newNode: () => ITrieNode = newTrieNode) {
    this.dataRoot = this.newNode();
  }

  setup(words: string[]): void {
    for (const word of words) {
      this.#addEntry(word.split(''));
    }
  }

  isInDict(pattern: string): boolean {
    return this.#getEntry(pattern.split(''));
  }

  #addEntry(chars: string[], currentNode: TrieNode = this.dataRoot): void {
    if (chars.length === 0) {
      return;
    }

    const [char, ...restChars] = chars;
    let nextNode: ITrieNode;
    if (currentNode.children.has(char)) {
      currentNode.isEndOfWord = false;
      nextNode = currentNode.children.get(char)!;
    } else {
      nextNode = this.newNode();
      currentNode.children.set(char, nextNode);
    }

    return this.#addEntry(restChars, nextNode);
  }

  #getEntry(chars: string[], currentNode: ITrieNode = this.dataRoot): boolean {
    if (chars.length === 0) {
      return currentNode.isEndOfWord;
    }

    const [char, ...restChars] = chars;
    if (char === wildcardCharacter) {
      for (const node of currentNode.children.values()) {
        if (this.#getEntry(restChars, node)) {
          return true;
        }
      }
      return false;
    }

    const nextNode = currentNode.children.get(char);
    if (!nextNode) {
      return false;
    }

    return this.#getEntry(restChars, nextNode);
  }
}
