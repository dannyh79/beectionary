# Beectionary

## Prereqs

- [asdf](https://asdf-vm.com/guide/getting-started.html)

## Getting Started

```sh
asdf install

# start program
deno run start

# run test suites
deno run test:unit
```

## Simple Dictionary

Used JavaScript map as key for constant time lookup.

## Wildcard Dictionary

- Data structured as Trie, as suggested, for performant search

  - Used JavaScript map as trie node's children for constant time lookup.

- Could make lookup more performant, by making `IDictionary` method `isInDict()` asynchronous

## Distributed Dictionary System Design

See [here](/src/distributedDictionary/README.md).
