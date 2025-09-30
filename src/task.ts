// src/task.ts
import { Order, orders, OrderReassignment, reassignments } from "./data";

/**
 * TODO: uzupełnij typy, aby wynik funkcji miał dokładnie taki sam kształt jak wejściowe Order
 */
export function getRootOrder(
  orderId: number,
  allOrders = orders,
  allReassignments: OrderReassignment[] = reassignments
): Order {
  // implementacja kandydata
  throw new Error("Not implemented");
}

/**
 * TODO: funkcja zwracająca wszystkie zamówienia w hierarchii powiązanej z root order
 */
export function getAllLinkedOrders(
  orderId: number,
  allOrders = orders,
  allReassignments: OrderReassignment[] = reassignments
): Order[] {
  throw new Error("Not implemented");
}