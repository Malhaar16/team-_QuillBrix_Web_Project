/**
 * This file contains TypeScript type definitions for various entities used in the application, 
 * including menus, products, orders, cart items, and cart state. 
 * It also defines action types for managing the shopping cart.
 * 
 * - MenuType: Represents the structure of menu items in the application.
 * - ProductType: Represents the structure of products, including optional options for customization.
 * - OrderType: Represents the structure of an order, including user email, price, and status.
 * - CartItemType: Represents items added to the cart, including quantity and optional customization.
 * - CartType: Represents the overall state of the shopping cart, including products, total items, and total price.
 * - ActionTypes: Defines the structure of functions to add and remove items from the cart.
 */
export type MenuType = {
  id: string;
  slug: string;
  title: string;
  desc?: string;
  img?: string;
  color: string;
}[];

export type ProductType = {
  id: string;
  title: string;
  desc?: string;
  img?: string;
  price: number;
  options?: { title: string; additionalPrice: number }[];
};

export type OrderType = {
  id: string;
  userEmail: string;
  price: number;
  products: CartItemType[];
  status: string;
  createdAt: Date;
  intent_id?: String;
};

export type CartItemType = {
  id: string;
  title: string;
  img?: string;
  price: number;
  optionTitle?: string;
  quantity: number;
};

export type CartType = {
  products: CartItemType[];
  totalItems: number;
  totalPrice: number;
};

export type ActionTypes = {
  addToCart:(item:CartItemType)=> void;
  removeFromCart:(item:CartItemType)=> void;
}
