import { findProduct } from "../../../src/routes/grahpql/schema/lib/GrahpQLType";
import { connect, connection } from "mongoose";
import { load } from "dotenv";
load();

beforeAll(async () => {
  connect(
    process.env.MONGODB_CONNECTION || "MONGODB_CONNECTION",
    { useNewUrlParser: true }
  );
  connection.once("open", () => console.log("Connected to mongodb database"));
});

afterAll(async () => {
  connection.close();
  connection.once("close", () => console.log("Disconnected to mongodb database"));
});

test("Find product by ID", () => {
  expect(findProduct("1")).toEqual({ name: "Websites", price: 100, id: "1" });

  expect(findProduct("4")).toEqual(undefined);
});
