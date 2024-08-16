declare function httpApplicationFactory(port: number, name?: string): void;

declare function printConsole(message: string): void;

declare const index_httpApplicationFactory: typeof httpApplicationFactory;
declare const index_printConsole: typeof printConsole;
declare namespace index {
  export { index_httpApplicationFactory as httpApplicationFactory, index_printConsole as printConsole };
}

export { index as http };
