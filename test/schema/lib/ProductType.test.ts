import { findProduct } from "../../../src/routes/grahpql/schema/lib/GrahpQLType";
import { connect, connection } from "mongoose";
import { ObjectID } from "mongodb";
import { load } from "dotenv";
load();

beforeAll(async () => {
  connect(
    process.env.MONGODB_CONNECTION_TEST || "MONGODB_CONNECTION",
    { useNewUrlParser: true }
  );
});

afterAll(async () => {
  connection.close();
});

test("Find product by ID", async () => {
  let result = await findProduct("5c77918b1c9d440000ea133c");

  expect(result._id).toEqual(new ObjectID("5c77918b1c9d440000ea133c"));
  expect(result.name).toEqual("Websites");
  expect(result.price).toEqual(100);

  result = await findProduct("");
  expect(result).toHaveLength(0);
  expect(result).toEqual([]);
});
