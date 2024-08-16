var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/http/index.ts
var http_exports = {};
__export(http_exports, {
  httpApplicationFactory: () => httpApplicationFactory,
  printConsole: () => printConsole
});

// src/http/app.ts
import express from "express";

// src/http/utils.ts
function printConsole(message) {
  console.log(message);
}

// src/http/app.ts
function httpApplicationFactory(port, name) {
  const app = express();
  app.listen(port, () => {
    printConsole(`Http Server runing in port: ${port}`);
  });
}
export {
  http_exports as http
};
