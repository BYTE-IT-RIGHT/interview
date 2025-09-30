import { getRootOrder, getAllLinkedOrders } from "./task";
import { orders, reassignments } from "./data";

const root = getRootOrder(4, orders, reassignments);
console.log("Root order:", root);

const linkedOrders = getAllLinkedOrders(4, orders, reassignments);
console.log("Linked orders", linkedOrders);