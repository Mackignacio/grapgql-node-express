import { fn } from "../src/index";

test("adds 2 number", () => {
  expect(fn(2, 2)).toBe(4);
});
