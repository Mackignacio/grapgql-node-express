import { findProduct } from "../../../src/routes/grahpql/schema/lib/GrahpQLType";

test("Find product by ID", () => {
  expect(findProduct("1")).toEqual({ name: "Websites", price: 100, id: "1" });

  expect(findProduct("4")).toEqual(undefined);
});
