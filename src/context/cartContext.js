import react from 'react'

const CartContext = react.createContext({
  cartList: [],
  addCartItems: () => {},
  removeCartItems: () => {},
})

export default CartContext
