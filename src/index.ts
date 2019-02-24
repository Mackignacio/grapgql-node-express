import express, { Request, Response, NextFunction } from "express";

const PORT = process.env.PORT || 5000;
const app = express();

function listenPort() {
  console.log(`Listening for request on port ${PORT}`);
}

app.listen(PORT, listenPort);

export const fn = (a: number, b: number) => a + b;
