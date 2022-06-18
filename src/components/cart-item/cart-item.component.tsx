import { ICartItem } from '../../types'
import {
  CartItemContainerStyles,
  CartItemDetailsContainer,
  CartItemDetailsField,
} from './cart-item.styles'

const CartItem = ({ cartItem }: { cartItem: ICartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem

  return (
    <CartItemContainerStyles>
      <img src={imageUrl} alt={`${name}`} />
      <CartItemDetailsContainer>
        <CartItemDetailsField>{name}</CartItemDetailsField>
        <CartItemDetailsField>
          {quantity} * ${price}
        </CartItemDetailsField>
      </CartItemDetailsContainer>
    </CartItemContainerStyles>
  )
}

export default CartItem
