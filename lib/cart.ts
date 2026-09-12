 "use client";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Product } from "./products";

export type CartItem = Product & { quantity: number };
type State = { items: CartItem[]; add: (p:Product)=>void; remove:(id:string)=>void; setQty:(id:string,q:number)=>void; clear:()=>void; };
export const useCart = create<State>()(persist((set)=>({
 items:[],
 add:(p)=>set(s=>({items:s.items.some(i=>i.id===p.id)?s.items.map(i=>i.id===p.id?{...i,quantity:i.quantity+1}:i):[...s.items,{...p,quantity:1}]})),
 remove:(id)=>set(s=>({items:s.items.filter(i=>i.id!==id)})),
 setQty:(id,q)=>set(s=>({items:q<1?s.items.filter(i=>i.id!==id):s.items.map(i=>i.id===id?{...i,quantity:q}:i)})),
 clear:()=>set({items:[]})
}),{name:"fuelora-cart"}));