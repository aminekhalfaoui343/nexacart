
"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

import type { Product } from "@/types/product";

export type CartItem = {
  product: Product;
  quantity: number;
};

type CartContextType = {
  cartItems: CartItem[];
  wishlistItems: Product[];
  cartCount: number;
  cartTotal: number;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  toggleWishlist: (product: Product) => void;
  isWishlisted: (productId: number) => boolean;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [wishlistItems, setWishlistItems] = useState<Product[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load saved data once when the application starts.
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem("nexacart-cart");
      const savedWishlist = localStorage.getItem("nexacart-wishlist");

      if (savedCart) {
        setCartItems(JSON.parse(savedCart) as CartItem[]);
      }

      if (savedWishlist) {
        setWishlistItems(JSON.parse(savedWishlist) as Product[]);
      }
    } catch {
      console.error("Unable to load saved cart or wishlist data.");
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // Persist changes after the initial load.
  useEffect(() => {
    if (!isLoaded) return;

    localStorage.setItem("nexacart-cart", JSON.stringify(cartItems));
    localStorage.setItem(
      "nexacart-wishlist",
      JSON.stringify(wishlistItems)
    );
  }, [cartItems, wishlistItems, isLoaded]);

  function addToCart(product: Product) {
    setCartItems((current) => {
      const existingItem = current.find(
        (item) => item.product.id === product.id
      );

      if (existingItem) {
        return current.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...current, { product, quantity: 1 }];
    });
  }

  function removeFromCart(productId: number) {
    setCartItems((current) =>
      current.filter((item) => item.product.id !== productId)
    );
  }

  function updateQuantity(productId: number, quantity: number) {
    if (quantity < 1) {
      removeFromCart(productId);
      return;
    }

    setCartItems((current) =>
      current.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  }

  function toggleWishlist(product: Product) {
    setWishlistItems((current) => {
      const exists = current.some((item) => item.id === product.id);

      return exists
        ? current.filter((item) => item.id !== product.id)
        : [...current, product];
    });
  }

  function isWishlisted(productId: number) {
    return wishlistItems.some((item) => item.id === productId);
  }

  function clearCart() {
    setCartItems([]);
  }

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        wishlistItems,
        cartCount,
        cartTotal,
        addToCart,
        removeFromCart,
        updateQuantity,
        toggleWishlist,
        isWishlisted,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside a CartProvider");
  }

  return context;
}
