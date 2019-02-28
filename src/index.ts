import express, { Request, Response, NextFunction } from "express";
import graphqlHTTP from "express-graphql";
import { schema } from "./routes/grahpql/schema";
import { load } from "dotenv";
load();

const app = express();
const isdev = process.env.NODE_ENV === "development"; // Check if on development mode

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: isdev,
  })
);

export { app };
