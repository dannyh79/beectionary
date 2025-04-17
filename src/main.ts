const logger = {
  info: (msg: unknown) => console.log(`[info] ${msg}`),
};

logger.info('Starting simple dictionary...');
await import('./simpleDictionary/main');

logger.info('Starting wildcard dictionary...');
await import('./wildcardDictionary/main');

// NOTE: Make this a module file for top-level await
export {};
