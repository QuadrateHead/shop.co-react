const CART_KEY = "cart";

/**
 * Reads the cart array from localStorage.
 * Returns [] if nothing is saved yet, or if the saved value is corrupted.
 */
export function getCart() {
  try {
    const stored = localStorage.getItem(CART_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (err) {
    console.error("Failed to read cart:", err);
    return [];
  }
}

/**
 * Overwrites the cart array in localStorage.
 */
export function saveCart(cart) {
  try {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  } catch (err) {
    console.error("Failed to save cart:", err);
  }
}

/**
 * Adds a product variant to the cart, or increases its amount
 * if that exact product + color + size is already in the cart.
 *
 * @param {object} product - full product object (needs id, name, price)
 * @param {object} options
 * @param {object} options.color - the full color object, e.g. { color: "#f50606", image: [...] }
 * @param {string} options.size - e.g. "medium"
 * @param {number} options.amount - quantity to add (default 1)
 */
export function addToCart(product, { color, size, amount = 1 } = {}) {
  const cart = getCart();

  const existingIndex = cart.findIndex(
    (item) =>
      item.id === product.id &&
      item.color.color === color.color &&
      item.size === size
  );

  if (existingIndex !== -1) {
    cart[existingIndex].amount += amount;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      color, // full { color, image } object, so the cart can show a thumbnail
      size,
      amount,
    });
  }

  saveCart(cart);
  return cart;
}

/**
 * Removes one exact product + color + size line item from the cart.
 * `colorHex` is just the hex string (e.g. "#f50606"), not the full color object.
 */
export function removeFromCart(id, colorHex, size) {
  const cart = getCart();
  const updated = cart.filter(
    (item) => !(item.id === id && item.color.color === colorHex && item.size === size)
  );
  saveCart(updated);
  return updated;
}

/**
 * Updates the amount for one exact product + color + size line item.
 * `colorHex` is just the hex string, not the full color object.
 * Removes the item entirely if newAmount <= 0.
 */
export function updateCartItemAmount(id, colorHex, size, newAmount) {
  const cart = getCart();

  if (newAmount <= 0) {
    return removeFromCart(id, colorHex, size);
  }

  const updated = cart.map((item) =>
    item.id === id && item.color.color === colorHex && item.size === size
      ? { ...item, amount: newAmount }
      : item
  );

  saveCart(updated);
  return updated;
}
