import WildcardDictionary from './dictionary';

const dict = new WildcardDictionary();
dict.setup(['cat', 'car', 'bar']);

console.log(`dict.isInDict('*at'): ${dict.isInDict('*at')}`);
console.log(`dict.isInDict('cr*'): ${dict.isInDict('cr*')}`);
