import { findUser, findUsersProducts } from "../../../src/routes/grahpql/schema/lib/GrahpQLType";

test("Find user by ID", () => {
  expect(findUser("1")).toEqual({ name: "Mack Ignacio", account_type: "admin", id: "1", product_id: "1" });

  expect(findUser("7")).toEqual(undefined);
});

test("Find all user by products", () => {
  expect(findUsersProducts("1")).toEqual([{ name: "Mack Ignacio", account_type: "admin", id: "1", product_id: "1" }]);

  expect(findUsersProducts("3")).toEqual([
    { name: "Bill Gates", account_type: "user", id: "4", product_id: "3" },
    { name: "Steve Jobs", account_type: "admin", id: "5", product_id: "3" },
    { name: "Allan turing", account_type: "admin", id: "6", product_id: "3" },
  ]);

  expect(findUsersProducts("4")).toEqual([]);
});
