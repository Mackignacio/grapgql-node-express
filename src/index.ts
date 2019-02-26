import express, { Request, Response, NextFunction } from "express";
import graphqlHTTP from "express-graphql";
import { schema } from "./routes/grahpql/schema";
import { load } from "dotenv";
load();

const app = express();

app.use("/graphql", graphqlHTTP({ schema, graphiql: true }));

const fn = (a: number, b: number) => a + b;

export { app, fn };
