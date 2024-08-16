import { httpApplicationFactory } from './app.js';
import { printConsole } from './utils.js';

declare const index_httpApplicationFactory: typeof httpApplicationFactory;
declare const index_printConsole: typeof printConsole;
declare namespace index {
  export { index_httpApplicationFactory as httpApplicationFactory, index_printConsole as printConsole };
}

export { httpApplicationFactory, index as i, printConsole };
