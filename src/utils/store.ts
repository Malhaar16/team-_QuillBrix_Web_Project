import { ActionTypes, CartType } from "@/types/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

/**
 * Initial state for the cart.
 * - `products`: Array of cart items.
 * - `totalItems`: Total count of items in the cart.
 * - `totalPrice`: Total cost of all items in the cart.
 */
const INITIAL_STATE = {
    products: [],
    totalItems: 0,
    totalPrice: 0,
};

/**
 * Zustand store with persist middleware for cart state management.
 * - `addToCart`: Adds an item to the cart or updates its quantity if already present.
 * - `removeFromCart`: Removes an item from the cart and updates totals.
 * 
 * Persist ensures the cart data remains even after a page refresh.
 */

export const useCartStore = create(
    persist<CartType & ActionTypes>(
        (set, get) => ({
            products: INITIAL_STATE.products,
            totalItems: INITIAL_STATE.totalItems,
            totalPrice: INITIAL_STATE.totalPrice,

            /**
             * Zustand store with persist middleware for cart state management.
             * - `addToCart`: Adds an item to the cart or updates its quantity if already present.
             * - `removeFromCart`: Removes an item from the cart and updates totals.
             * 
             * Persist ensures the cart data remains even after a page refresh.
             */
           addToCart(item) {
                const products = get().products;
                const productInState = products.find((product) => product.id === item.id);
            
                if (productInState) {
                    const updatedProducts = products.map((product) =>
                        product.id === productInState.id
                            ? {
                                  ...product,
                                  quantity: product.quantity + item.quantity,
                              }
                            : product
                    );
                    set((state) => ({
                        products: updatedProducts,
                        totalItems: state.totalItems + item.quantity,
                        totalPrice: state.totalPrice + item.price * item.quantity,
                    }));
                } else {
                    set((state) => ({
                        products: [...state.products, { ...item }],
                        totalItems: state.totalItems + item.quantity,
                        totalPrice: state.totalPrice + item.price * item.quantity,
                    }));
                }
            },
            
             /**
             * Removes an item from the cart.
             * - Filters the item out of the cart products.
             * - Recalculates total items and total price.
             */
            removeFromCart(item) {
                set((state) => {
                    const updatedProducts = state.products.filter(
                        (product) => product.id !== item.id
                    );
            
                    const totalItems = updatedProducts.reduce(
                        (acc, product) => acc + product.quantity,
                        0
                    );
                    const totalPrice = updatedProducts.reduce(
                        (acc, product) => acc + product.price * product.quantity,
                        0
                    );
            
                    return {
                        products: updatedProducts,
                        totalItems,
                        totalPrice,
                    };
                });
            }
            }),
        { name: "cart", skipHydration: true }
    )
);