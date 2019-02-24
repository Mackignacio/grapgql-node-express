import express, { Request, Response, NextFunction } from "express";
import { load } from "dotenv";
load();

export const app = express();

export const fn = (a: number, b: number) => a + b;
