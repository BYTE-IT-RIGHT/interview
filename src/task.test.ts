import { getRootOrder } from "./task";
import { orders, reassignments } from "./data";

test("getRootOrder should find the root of a chain", () => {
  expect(getRootOrder(4, orders, reassignments).id).toBe(1);
});
