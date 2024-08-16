import {
  printConsole
} from "./chunk-MANVX5O5.mjs";

// src/http/app.ts
import express from "express";
function httpApplicationFactory(port, name) {
  const app = express();
  app.listen(port, () => {
    printConsole(`Http Server runing in port: ${port}`);
  });
}

export {
  httpApplicationFactory
};
