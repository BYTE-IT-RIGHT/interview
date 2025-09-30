// src/data.ts

// --- Typy danych ---
export type Product = {
  id: number;
  name: string;
};

export type Order = {
  id: number;
  products: Product[];
};

// TODO: popraw typ tak, aby redirect_from i redirect_to
// wskazywały tylko istniejące Order["id"]
export type OrderReassignment = {
  redirect_from: number;
  redirect_to: number;
};

// --- Przykładowe dane ---
export const orders: Order[] = [
  { id: 1, products: [{ id: 101, name: "Shoes" }] },
  { id: 2, products: [{ id: 102, name: "Shirt" }] },
  { id: 3, products: [{ id: 103, name: "Socks" }] },
  { id: 4, products: [{ id: 104, name: "Hat" }] },
];

export const reassignments: OrderReassignment[] = [
  { redirect_from: 2, redirect_to: 1 },
  { redirect_from: 3, redirect_to: 1 },
  { redirect_from: 4, redirect_to: 3 },
];