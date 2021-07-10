import { createSelector } from 'reselect';

// input selector - extract and return the state
const selectCart = state => state.cart;
 
//output selectors below - transforming large state into smaller peice of state
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((accumulatedQuantity, cartItem) =>
    accumulatedQuantity + cartItem.quantity,
    0
  )
);