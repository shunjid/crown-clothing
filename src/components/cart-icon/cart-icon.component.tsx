import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'
import {
  CartIconContainer,
  CartItemCount,
  ShoppingIcon,
} from './cart-icon.styles'

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext)
  const iconClickHandler = () => setIsCartOpen(!isCartOpen)

  return (
    <CartIconContainer onClick={iconClickHandler}>
      <ShoppingIcon className="shopping-icon" />
      <CartItemCount className="item-count">{cartCount || 0}</CartItemCount>
    </CartIconContainer>
  )
}

export default CartIcon
