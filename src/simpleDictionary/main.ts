import SimpleDictionary from './dictionary';

const dict = new SimpleDictionary();
dict.setup(['cat', 'car', 'bar']);

console.log(`dict.isInDict('cat'): ${dict.isInDict('cat')}`);
console.log(`dict.isInDict('bat'): ${dict.isInDict('bat')}`);
