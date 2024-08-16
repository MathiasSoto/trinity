import express from "express";
import { printConsole } from "./utils";

export function httpApplicationFactory(port: number, name?: string) {
  const app = express();
  app.listen(port, () => {
    printConsole(`Http Server runing in port: ${port}`);
  });
}
