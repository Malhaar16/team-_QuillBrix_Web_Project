import { ActionTypes, CartType } from "@/types/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const INITIAL_STATE = {
    products: [],
    totalItems: 0,
    totalPrice: 0,
};

export const useCartStore = create(
    persist<CartType & ActionTypes>(
        (set, get) => ({
            products: INITIAL_STATE.products,
            totalItems: INITIAL_STATE.totalItems,
            totalPrice: INITIAL_STATE.totalPrice,
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