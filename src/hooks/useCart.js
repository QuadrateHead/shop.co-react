import { useState, useCallback } from "react";
import {
  getCart,
  addToCart as addToCartStorage,
  removeFromCart as removeFromCartStorage,
  updateCartItemAmount as updateCartItemAmountStorage,
} from "../utils/cartStorage";

export function useCart() {
  const [cart, setCart] = useState(() => getCart());

  const addToCart = useCallback((product, options) => {
    const updated = addToCartStorage(product, options);
    setCart(updated);
  }, []);

  const removeFromCart = useCallback((id, colorHex, size) => {
    const updated = removeFromCartStorage(id, colorHex, size);
    setCart(updated);
  }, []);

  const updateCartItemAmount = useCallback((id, colorHex, size, newAmount) => {
    const updated = updateCartItemAmountStorage(id, colorHex, size, newAmount);
    setCart(updated);
  }, []);

  const totalItems = cart.reduce((sum, item) => sum + item.amount, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.amount, 0);


  const updateTotal = useCallback( () => {
    
  }, [totalPrice])
  

  return {
    cart,
    addToCart,
    removeFromCart,
    updateCartItemAmount,
    totalItems,
    totalPrice,
  };
}