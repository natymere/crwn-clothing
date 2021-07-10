export const addItemToCart = (cartItems, cartItemToAdd) => {
  //  variable is undefined if cart item is not found
  const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

  // return new versions of our state so that our component knows to render
  if (existingCartItem) {
    return cartItems.map(cartItem => cartItem.id === cartItemToAdd.id
      ? { ...cartItem, quantity: cartItem.quantity + 1 }
      : cartItem
    )
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}