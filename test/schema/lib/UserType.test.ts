import { findUser, findUsersProducts } from "../../../src/routes/grahpql/schema/lib/GrahpQLType";
import { connect, connection } from "mongoose";
import { load } from "dotenv";
import { ObjectID } from "mongodb";
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

test("Find user by ID", async () => {
  let users = await findUser("5c7791071c9d440000ea133b");

  expect(users._id).toEqual(new ObjectID("5c7791071c9d440000ea133b"));
  expect(users.product_id).toEqual(new ObjectID("5c77918b1c9d440000ea133c"));
  expect(users.account_type).toEqual("admin");
  expect(users.name).toEqual("Mack Ignacio");

  users = await findUser("");
  expect(users).toHaveLength(0);
  expect(users).toEqual([]);
});

test("Find all user by product_id", async () => {
  let users = await findUsersProducts("5c77918b1c9d440000ea133c");
  expect(users[0]._id).toEqual(new ObjectID("5c7791071c9d440000ea133b"));
  expect(users[0].product_id).toEqual(new ObjectID("5c77918b1c9d440000ea133c"));
  expect(users[0].account_type).toEqual("admin");
  expect(users[0].name).toEqual("Mack Ignacio");

  users = await findUsersProducts("5c77ac8e1c9d440000fd0213");
  expect(users).toHaveLength(3);

  users = await findUsersProducts("");
  expect(users).toHaveLength(0);
  expect(users).toEqual([]);
});
